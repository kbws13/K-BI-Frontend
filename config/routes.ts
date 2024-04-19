export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  { path: '/', redirect: '/addChart' },
  { path: '/addChart', name: '智能分析', icon: 'barChart', component: './AddChart' },
  {
    path: '/addChartAsync',
    name: '智能分析（异步）',
    icon: 'barChart',
    component: './AddChartAsync',
  },
  { path: '/myChart', name: '我的图表', icon: 'pieChart', component: './MyChart' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
    ],
  },

  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];

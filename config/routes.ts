export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  { path: '/', redirect: '/addChart' },
  { path: '/addChart', name: '创建图表', icon: 'barChart', component: './AddChart' },
  { path: '/myChart', name: '我的表格', icon: 'pieChart', component: './MyChart' },
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

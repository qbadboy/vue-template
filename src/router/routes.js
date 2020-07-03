const routes = [
  {{#each routes}}
  {
    name: '{{name}}',
    path: '{{path}}',
    component: () => import('{{module}}')
  },
  {{/each}}
];

export default routes;
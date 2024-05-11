export default {
  // site-level options
  title: 'visual-charts',
  description: 'visual-charts',
  head: [
    ['link', {rel: 'icon', href: './logo.png'}],
    ['link', {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css'}],
    ['script', {src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js'}]
  ],
  lang: 'zh-CN',
  lastUpdated: true,
  base: '/visual-charts/',
  alias: {
    '/@/': '/src/'
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '/src/assets/**'],
  // https://mdit-plugins.github.io/zh/tasklist.html
  markdown: {
    lineNumbers: true,
    config: (md) => {
    }
  },
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    nav: nav(),
    sidebar: sidebar(),
    outline: {
      level: [2, 3]
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最近更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    footer: {
      message: 'By Modify.',
      copyright: 'Copyright © 2024-present Modify and visualCharts contributors'
    }
  }
};

function nav() {
  return [
    {text: '首页', link: '/'},
    // {text: '开始', link: '/README.md'},
    {
      text: '组件', link: '/', activeMatch: '/components/'
    }
  ];
}

function sidebar() {
  return {
    '/components/': components(),
  };
}


function components() {
  return [
    {
      text: '前端',
      collapsible: false,
      collapsed: false,
      items: [
        {text: 'css', link: '/topic/frontend/css'},
        {text: 'js', link: '/topic/frontend/js'},
        {text: 'vue2', link: '/topic/frontend/vue2'},
        {text: 'vue3', link: '/topic/frontend/vue3'},
        {text: 'webpack', link: '/topic/frontend/webpack'},
        {text: 'ssr', link: '/topic/frontend/ssr'}
      ]
    },
    {
      text: 'JAVA',
      collapsed: false,
      collapsible: false,
      items: [
        {text: 'Java基础', link: '/topic/java/base'},
        {text: '线程并发', link: '/topic/java/thread'},
        {text: 'Tomcat', link: '/topic/java/tomcat'},
        {text: 'Spring', link: '/topic/java/spring'},
        {text: 'Redis', link: '/topic/java/redis'},
        {text: 'ES', link: '/topic/java/es'},
        {text: 'Zookeeper', link: '/topic/java/zk'},
        {text: 'RabbitMQ', link: '/topic/java/rabbitmq'}
      ]
    },
    {
      text: 'MYSQL',
      collapsible: false,
      collapsed: false,
      items: [
        {text: 'lock', link: '/topic/mysql/lock'},
        {text: 'tree', link: '/topic/mysql/tree'}
      ]
    }
  ];
}


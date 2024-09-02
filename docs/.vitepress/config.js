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
  server: {
    port: 8099 // 设置新的端口号
  },
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
    {text: '开始', link: '/start.md'},
    {
      text: '组件', link: '/component/title/title1'
    }
  ];
}

function sidebar() {
  return {
    '/component/': component()
  };
}


function component() {
  return [
    {
      text: '标题组件',
      collapsible: true,
      collapsed: true,
      items: [
        {text: '标题一', link: '/component/title/title1'}
      ]
    },
    {
      text: '背景组件',
      collapsible: true,
      collapsed: true,
      items: [
        {text: '代码雨', link: '/component/bg/codeRain'}
      ]
    },
    {
      text: 'Loading组件',
      collapsible: true,
      collapsed: true,
      items: [
        {text: '折线图', link: '/component/chart/line'}
      ]
    },
    {
      text: '文本组件',
      collapsible: true,
      collapsed: true,
      items: [
        {text: '文本一', link: '/component/text/text1'}
      ]
    }
  ];
}


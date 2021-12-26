module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  // 插件
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        placeholder: '搜索',
      },
    ],
    ['@vssue/vuepress-plugin-vssue', {
      platform: 'github',
      owner: 'klarkxy',
      repo: 'klarkxy.github.io',
      clientId: 'af5542c439c6b39a9a26',
      clientSecret: '49e7076253861c5e0729809cf3fc34587b76918f',
    }],
  ],
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
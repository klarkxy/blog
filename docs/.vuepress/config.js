const { path } = require("@vuepress/utils");
const my_navbar = require("./navbar")
const my_plugins = require("./plugins")

module.exports = {
    lang: 'zh-CN',
    title: "为美好世界献上珂学",
    description: "欢迎来到这行将终结、匆忙纷扰、并且完全看不到救赎的世界。",
    plugins: my_plugins,

    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
    },
};
module.exports = {
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',

    themeConfig: {
        nav: [//导航栏
            { text: '主页', link: '/' },
            { text: '目录',link:'/catalog'}
        ],
        catalogUrl:'/catalog',//必填 目录路径
        lastUpdated: 'Last Updated',//必填：文章显示最新修改时间
    },
    
    theme: 'ting'
}
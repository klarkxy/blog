module.exports = [

    {
        text: '快速开始',
        link: '/readme/',
        iconClass: 'aurora-navbar-si-glyph-game-1'
    },
    {
        text: '百度一下',
        link: 'https://www.baidu.com/',
        iconClass: 'aurora-navbar-si-glyph-billiard-ball'
    },
    {
        text: '好用网站',
        iconClass: 'aurora-navbar-si-glyph-glass-water',
        children: [{
                text: 'npm',
                children: [{
                        text: 'npm',
                        link: 'https://www.npmjs.com/'
                    },
                    {
                        text: '我自己的包',
                        link: 'https://www.npmjs.com/settings/qsyyke/packages'
                    }
                ]
            },
            {
                text: '搜索引擎',
                children: [{
                        text: "百度",
                        link: 'https://www.baidu.com/',
                    },
                    {
                        text: '谷歌',
                        link: 'https://www.google.com/'
                    }
                ]
            },
            {
                text: 'icon',
                children: [{
                        text: '阿里图标',
                        link: 'https://www.iconfont.cn/',
                    },
                    {
                        text: '好看网站',
                        link: 'https://solstice23.top/'
                    }
                ]
            }
        ]
    },
    {
        text: '问题和bug',
        iconClass: 'aurora-navbar-si-glyph-emoticon',
        children: [{
                text: 'CHANGELOG',
                children: [
                    '/issue/CHANGELOG.md'
                ]
            },
            {
                text: '主题详细搭建教程',
                children: [
                    '/readme/introduce.md',
                    '/use/useTheme.md'
                ]
            },
            {
                text: '问题',
                children: [
                    '/issue/',
                ]
            },
            {
                text: 'bug',
                children: [
                    '/issue/bug.md',
                ]
            }
        ]
    },
    {
        text: '其他配置',
        iconClass: 'aurora-navbar-shoulijindu-xuanzhong',
        children: [{
                children: [
                    "/home/deploy.md",
                ],
                text: "home",
            },
            {
                children: [
                    "/comment/README.md",

                    "/page/README.md",
                ],
                text: "其他配置",
            },
            {
                children: [
                    "/v1.3.0/README.md",

                ],
                text: "V1.3.2",
            }
        ],
    },
    {
        text: "about",
        link: "/about",
        iconClass: 'aurora-navbar-a-ziyuan107'
    },
    {
        text: 'link',
        link: '/link',
        iconClass: 'aurora-navbar-guide'
    },
    {
        text: 'tag',
        link: '/tag',
        iconClass: 'aurora-navbar-hua2'
    },
    {
        text: 'chat',
        link: '/mood',
        iconClass: 'aurora-navbar-weather'
    },
    {
        text: "photo",
        link: '/photo',
        iconClass: 'aurora-navbar-kechengguanli'
    },
    {
        text: "time",
        link: '/archive',
        iconClass: 'aurora-navbar-si-glyph-egg'
    },
    {
        text: 'Aurora',
        link: 'https://github.com/vuepress-aurora/vuepress-theme-aurora',
        iconClass: 'aurora-navbar-github-circle'
    }
]
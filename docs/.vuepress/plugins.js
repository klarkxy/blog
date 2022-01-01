module.exports = [
    [
        '@vuepress/plugin-search',
        {
            placeholder: '搜索',
        }
    ],

    // live2D
    ['vuepress-plugin-live2d-plus', {
        enable: true,
        model: {
            url: '/chtholly/assets/chtholly.model.json'
        },
        display: {
            position: 'left',
            width: '200px',
            height: '400px',
            xOffset: '-30px',
            yOffset: '-60px'
        },
        mobile: {
            show: true
        },
        react: {
            opacity: 0.8
        }
    }
    ],
]
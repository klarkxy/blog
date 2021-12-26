module.exports = [
    //为博客加入搜索功能 https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html
    [
        '@vuepress/plugin-search',
        {
            placeholder: '搜索',
        }
    ],

    //为博客加入气泡功能 https://aurora.xcye.xyz/plugin/bubble 如果需要，请打开注释
    [
        'bubble',
        {
            //气泡数量 推荐0(不包括)到1之前的小数，
            bubbleNumber: 0.14,

            //气泡透明度 0到1之间的小数
            bubbleAlpha: 0.6,

            //透明度变化速度，越接近于0越好
            alphaChangeSpeed: 0.00001,

            //气泡大小，推荐0到1之间的值
            size: 0.4,

            //气泡大小变化速度 越小越好
            sizeChangeSpeed: 0.0002,

            //气泡上升速度
            riseSpeed: 0.4,

            //气泡颜色，白色rgb(255,255,255) 请传入255,255,255
            color: '255,255,255',

            zIndex: -2
        }
    ],

    //为博客加入文章归档功能 https://aurora.xcye.xyz/plugin/archive
    [
        'archive',
        {
            //需要排除的页面url，在该数组里面的路径，都不会被统计
            excludes: ['/404.html', '/about/', '/mood/', '/link/', '/tag/', '/photo/'],
            //当某篇文章没有标题时，将使用下面值进行替换
            noTitle: '暂时没有标题配置'
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
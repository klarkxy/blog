/*
 * 此文件是博客的配置文件，你可以在这里配置插件，还有主题配置项
 * 在使用的过程中，推荐对照这文档进行配置，主题文档地址https://aurora.xcye.xyz/，下面这些配置项，你在配置的时候，不用问我，每一个是什么，有什么用
 * 你自己配置之后，重新运行npm run dev，刷新网页，便可以看到效果，就知道他是什么
 *
 * 一定要记得，你修改过此文件，一定要重新运行npm run dev命令，为了配置方便，如果你还没有下载任何的编辑器的话，推荐下载一个vscode,官网https://code.visualstudio.com/Download
 * 如果有任何的问题，欢迎加入主题交流群询问: 681602026,
 * */

const {
    path
} = require("@vuepress/utils");
const my_navbar = require("./navbar")
const my_plugins = require("./plugins")
module.exports = {
    //base: '/REPO/',//如果你准备发布到 https://<USERNAME>.github.io/<REPO>/ ，也就是说你的仓库地址是 https://github.com/<USERNAME>/<REPO> ，则将 base 设置为 "/<REPO>/"。

    extendsMarkdown: (md) => {

    },

    //在这里配置插件 plugins是一个数组对象
    plugins: my_plugins,

    //设置head 一定要加入<script src="https://at.alicdn.com/t/font_2849934_v6y652peian.js"></script>项配置，否则一些图标不能正常显示
    head: [
        [
            "script",
            {
                src: "https://at.alicdn.com/t/font_2849934_v6y652peian.js",
            },
        ],
        //设置站点icon
        [
            "link",
            {
                href: "/avatar.jpg",
                rel: "icon",
            },
        ],
        [
            "link",
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://at.alicdn.com/t/font_2932340_r7zitafg82.css'
            }
        ],
    ],
    theme: 'aurora', //如果需要使用在线主题，那么打开此注释

    //站点title
    title: "欢迎来到这行将终结、匆忙纷扰、并且完全看不到救赎的世界。",

    lang: 'zh-CN',

    //设置运行npm run dev的端口
    port: 8080,

    //themeConfig的所有配置，都是主题配置，包含默认主题配置项
    themeConfig: {
        //这里配置导航栏项，建议将navbar提取出，比如navbar.js
        navbar: my_navbar,

        //项目地址
        repo: "https://github.com/klarkxy/klarkxy.github.io.git",

        repoIconClass: 'aurora-navbar-github',

        //md文件的仓库地址
        docsRepo: 'https://github.com/klarkxy/klarkxy.github.io.git',

        githubActions: true,

        //md文件存放的仓库分支
        docsBranch: 'src',

        //顶部导航栏，你repo地址的超链接文本
        repoLabel: "klarkxy.github.io",

        //是否启用文章在线编辑
        editLink: true,

        //在线编辑文字
        editLinkText: "edit",
        lastUpdated: true,
        lastUpdatedText: "lastTime",

        //下面的都是主题自己的配置文件
        //logo旁文字颜色
        logoColor: "#2c3e50",

        //样式控制面板字体占位符，如果是国内用户，请使用中文
        showFont: "喵",

        //首页中间hero图片地址
        heroImg: '/avatar.jpg',

        //logo图片地址
        logo: "/avatar.jpg",

        //文章懒加载图片 仅限文章，首页文章占位图片并不是这个
        lazyLoadingImg: "https://ooszy.cco.vin/img/blog-public/ljz.gif",

        //这是首页文章列表懒加载图片
        homePageLazyLoadingImg: 'https://ooszy.cco.vin/img/blog-note/aurora-loading.gif?name=chuchen',

        //随机一言接口
        randomSaw: "https://international.v1.hitokoto.cn/?c=b&max_length=45",

        //是否启用定制首页随机一言，默认未开启，使用随机一言 接口为https://international.v1.hitokoto.cn/?c=b&max_length=45
        customRandomSay: false,

        //定制首页随机一言文字
        customRandomValue: 'Vuepress-theme-Aurora',

        //社交信息，首页PC端至多显示19个，手机端至多显示7个，侧边栏不影响
        socials: [{
                //社交链接
                aHref: "tencent://message/?uin=278370456",

                //true为在首页显示，反之
                isHome: true,

                //是否显示此社交信息,如果为false，尽管isHome=true，sidebar=true，也不会显示
                show: true,

                //是否在侧边栏显示
                sidebar: true,

                //使用阿里图标 使用的是阿里图标库，我也挑选部分图标，请进入http://ico.cco.vin/theme查看
                symbol: '#icon-qq',

                //鼠标移入此图标时，显示的图片，适用于微信等通过二维码添加好友
                // showImgSrc: "https://ooszy.cco.vin/img/blog-public/wechat.jpg",
            },
            {
                aHref: "https://github.com/qsyyke/",
                isHome: true,
                show: true,
                sidebar: true,
                symbol: '#icon-github-fill'
            },
            {
                aHref: "https://space.bilibili.com/47071278",
                isHome: true,
                show: true,
                sidebar: true,
                symbol: '#icon-bilibili-1'
            },
            {
                aHref: "mailto:278370456@qq.com",
                isHome: true,
                show: true,
                sidebar: true,
                symbol: '#icon-email'
            },
        ],

        //logo旁文字 默认值为Aurora
        logoTitle: "为美好世界献上珂学",

        headTitle: "为美好世界献上珂学",

        //站点描述
        description: "vuepress-theme-Aurora是一款简洁，美观，功能强大的静态主题",

        //站点关键词，在后续版本中，还需优化 请使用英文状态下的逗号','隔开
        keyword: "",

        //样式控制面板打开之后，休眠多长时间自动关闭面板，单位毫秒
        slideTime: 300000,

        //拿取对象 在后续版本中，会对此项进行优化
        randomSawQuery: "hitokoto",
        method: "get",

        //样式控制面板至多显示多少个字体和字体颜色，推荐不超过8个
        maxFontColorArr: 8,

        //在样式控制面板中，显示的字体颜色集合
        fontColor: [
            "#2c3e50", "#42a5f5", "#8093f1", "#FF6EC7", "#FF7F00", "#8FBC8F", "#EAADEA",
            "#3299CC", "#CDCDCD", "#CC3299", "#FF7F00", "#2F4F4F",
        ],

        //友情链接数组
        friendLinks: [
            {
                title: '奈芙莲的朋友们',
                links: [{
                        //网站标题
                        title: "我永远喜欢奈芙莲",

                        //站点链接
                        url: "https://qm.qq.com/cgi-bin/qm/qr?k=wqcTdZl1TdTo0bTQrN0SGpSrVvVxjON2&jump_from=webapi",

                        //站点logo
                        logo: "/Nephren.jpg",
                    },
                ]
            },
        ],

        //样式控制面板显示的字体，有默认值
        fontFamily: [
            "-apple-system", "hlt", "tzt", "sst", "lf", "xsf", "lsf", "cgt",
        ],

        //页脚信息，支持HTML，这是一个数组
        footer: [
            "Copyright © by qsyyke All Rights Reserved.",
            "<a target='_blank' href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=53060202000142' style='display:inline-block;text-decoration:none;height:20px;line-height:20px;'><img src='' style='float:left;'/><p style='float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px;'>滇公网安备 53060202000142号</p></a>",
        ],

        //是否显示页脚，控制全局
        isShowFooter: true,

        //是否显示主题信息在页脚，为false关闭
        isShowThemeCopyright: true,

        //是否展示运行时间
        isShowRunTime: true,

        //网站开始时间，请按照以下格式进行
        startRunTime: "12/26/2021 12:22:00",

        //网站运行时间前缀
        prefixRuntime: "小破站已运行",

        //文章底部最大推荐文章数 默认值为30
        recommendPageLength: 30,

        //推荐列表标题为空时，就会使用这个进行代替，默认是`╮(￣▽￣)╭`
        recommendNoTitle: "`╮(￣▽￣)╭`",

        //tag页，没有标题时，代替文字 默认是下面这个
        tagNoTitle: "暂时还没有标题哟",

        //默认打开网站时的毛玻璃状态，TRUE表示默认开启毛玻璃效果
        isFitter: true,

        //默认的圆角，传入数字
        defaultBorderRadius: 10,

        //默认的透明度，传入0到1之间的小数，0表示全透明
        defaultOpacity: 1,

        //首页文章列表透明度是否跟随样式面板改变，true表示跟随，全白色,false表示不跟随
        isHomePageFollow: false,

        //默认模糊度
        defaultBlur: 1,

        //手机端，是否在页面的底部显示侧边栏列表，默认开启，如果需要开启，请将此值设置为FALSE
        //mobilePageSidebar: false,

        //tag页面，标签分割符 请不要传入一个空字符串，默认值就是' ' 一个空格
        split: "~",

        //首页背景图片数组，考虑到使用随机图片，打开网站速度变慢，所以移除随机图片，使用自己设置的图片链接
        homeWps: [
            '/bg/1.jpg', //使用本地图片
            '/bg/3.jpg',
        ],

        //手机端首页背景图片
        homeWpsMobile: [
            '/bg/1.jpg',
            '/bg/3.jpg',
        ],

        //首页文章显示条数，默认为4，此值不推荐设置太大
        pageSize: 4,

        //侧边栏配置
        //github地址
        githubUrl: "https://github.com/klarkxy",

        //最新文章数量，默认为6
        latestPageSize: 6,

        //文章侧边栏自动获取的层次 默认为1，也就是http://localhost:8080/config/feature/donate.html,只会自动生成feature目录下的文件
        sidebarCatalogLevel: 3,

        //首页文章列表封面图api接口
        homePageImgApi: "https://api.ixiaowai.cn/api/api.php",

        //手机端侧边栏横线分割文字，默认为Aurora
        mobileCutText: "Aurora",

        //侧边栏标签处显示还是分类还是标签，只有两个值，默认为分类，如果为categories，那么就显示为类别，否则显示为标签
        sidebarTag: "categories",

        //文章h2标签的icon
        articleH2Icon: '🌸',

        //文章h3标签的icon
        articleH3Icon: '🐳',

        //文章h4标签及h4标签之后的标签的icon
        articleH4Icon: '⛄',

        //v1.6.4新增配置
        sidebarAvatar: '/avatar.jpg',

        //1.7.1增加配置
        sugCountPerMin: 300,

        //v1.8.0新增配置项
        //是否展示文章推荐 默认展示
        showRecommend: true,

        //文章页面是否显示上一页，下一页 默认展示
        articlePagination: true,

        //在统计文章，标签，类别的时候，需要排除的路径，只针对于根目录下的路径，
        excludePath: ['/footer.html', '/v1.3.0/', '/plugin/', "/node.html", "/style.html"],

        //类别项是否包含文件夹名，默认包含
        categoriesIncludeFolderName: true,
        //首页波浪效果设置
        wave: {
            showWave: true
        },

        //顶部图片的气泡控制
        bubble: {
            show: true,

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
            color: '255,255,255'
        },

        /**
         * 这里是配置统计阅读量的leanCloud配置，从1.9.0开始，将不再需要依赖waline的阅读统计,这里配置的appId,appKey,masterKey可以
         * 和vuepress-plugin-coze插件使用同一个应用
         * */
        leanCloud: {
            appId: '2A2Dyd2AffrnldhwftlEddVn-MdYXbMMI',
            appKey: 'qHYTbb91iOPLelyC9lpbXxLH',
            masterKey: 'eUwfvS3luIPnPiHS5SpEhDYr',
        },

        //这是v1.9.0新增加的功能 是否在文章页底部显示最后更新时间，贡献者，点击编辑,默认显示
        showPageMeta: false,

        /*
         * 以下是1.11.0版本新增的配置项
         * */

        //随机一眼接口，请注意，一定要保证该接口直接返回Text文本，一定要保证该接口直接返回Text文本，而不是返回json
        randomSayApi: {
            method: 'GET',
            urlApi: 'https://v1.hitokoto.cn/?encode=text&c=a'
        },

        /*
         * 一下是v1.11.1版本增加的配置
         * */
        afDianUrl: 'https://afdian.net/@qsyyke', //你的爱发电个人页面地址

        /*
         * 下面这些是v1.12.0版本新增的配置项
         * */

        // 首页置顶文字
        homeTopText: '置顶',

        //侧边栏一句话描述
        sidebarDesc: '喜欢动漫，Coding目前是一名大三学生,CS专业,坐标西南边陲',
    }
};
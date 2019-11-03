module.exports = {
    // base: '',
    title: '橘瑠衣',
    description: '橘瑠衣的个人博客',
    head: [
        ['link', {rel: 'icon', href: '/images/logo.png'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上
        lastUpdated: 'Last Updated',  // 文档更新时间：每个文件git最后提交的时间,

        //顶部导航栏
        nav: [
            //  '/'指的是docs文件夹路径，默认指向README.md
            {text: '首页', link: '/'},
            {text: '博文', link: '/article/'},
            {text: '归档', link: '/archive/'},
            {text: '图库', link: '/pic/'},
            {text: 'GiHhub', link: 'https://github.com/Lovelesss'},

        ],
        //侧边栏
        sidebar: {
            '/article/': [
                {
                    title: 'js',
                    children: [
                        ['/article/js/js1', 'js文章1'],
                        ['/article/js/js2', 'js文章2']
                    ]
                },
                {
                    title: 'css',
                    children: [
                        ['/article/css/css1', 'css文章1'],
                        ['/article/css/css2', 'css文章2'],
                    ]
                },
                {
                    title: 'vue',
                    children: [
                        ['/article/vue/vue1', 'vue文章1'],
                        ['/article/vue/vue2', 'vue文章2']
                    ]
                }
            ],
            '/archive/': [],
            '/pic/': []

        }
    },
    //PWA配置
    serviceWorker: true

}
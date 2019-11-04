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
        lastUpdated: '上次更新时间',  // 文档更新时间：每个文件git最后提交的时间,

        //顶部导航栏
        nav: [
            //  '/'指的是docs文件夹路径，默认指向README.md
            {text: '首页', link: '/'},
            {text: '笔记', link: '/article/'},
            {text: '归档', link: '/archive/'},
            {text: '图库', link: '/pic/'},
            {text: 'GiHhub', link: 'https://github.com/Lovelesss'},

        ],
        //侧边栏
        sidebar: {
            '/article/': [
                {
                    title: 'JavaScript',
                    children: [
                        ['/article/js/objectCopy', 'js对象深拷贝'],
                        ['/article/js/debounce', 'js防抖'],
                        ['/article/js/dispatch', 'js自定义事件'],
                        ['/article/js/extend', 'ES6类的继承']
                    ]
                },
                {
                    title: 'CSS',
                    children: [
                        ['/article/css/css1', 'css文章1'],
                        ['/article/css/css2', 'css文章2'],
                        ['/article/css/css3', 'css文章4'],
                    ]
                },
                {
                    title: 'VUE',
                    children: [
                        ['/article/vue/activated', 'keep-alive和activated'],
                        ['/article/vue/vuexUpdateData', 'vuex修改数据'],
                        ['/article/vue/alphabetScroll', '字母表下拉关键代码'],
                        ['/article/vue/lifeCircle', 'Vue生命周期']
                    ]
                },
                {
                    title: 'Git',
                    children: [
                        ['/article/git/add', 'git提交代码'],
                        ['/article/git/branch', 'branch相关'],
                    ]
                },
                {
                    title: 'Algorithm',
                    children: [
                        ['/article/algorithm/sort', 'js排序算法'],
                    ]
                }
            ],
            '/archive/': [],
            '/pic/': []

        }
    },
    //PWA配置
    serviceWorker: true,


}
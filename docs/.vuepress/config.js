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
            {text: '面试题', link: '/interview/'},
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
                        ['/article/js/extend', 'ES6类的继承'],
                        ['/article/js/audio', 'audio初探']
                    ]
                },
                {
                    title: 'CSS',
                    children: [
                        ['/article/css/scroll', '滚动条'],
                        // ['/article/css/css2', 'css文章2'],
                        // ['/article/css/css3', 'css文章4'],
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
            '/interview/': [
                {
                    title: '计算机网络',
                    children: [
                        ['/interview/network/network', '计算机网络']
                    ]
                },
                {
                    title: 'HTML',
                    children: [
                        ['/interview/html/html', 'html']
                    ]
                },
                {
                    title: 'CSS',
                    children: [
                        ['/interview/css/css', 'css'],
                        ['/interview/css/float', '浮动'],
                        ['/interview/css/position', 'position定位'],
                        ['/interview/css/pseudo', '伪元素'],
                        ['/interview/css/center', '垂直居中'],
                        ['/interview/css/grid', '栅格']
                    ]
                },
                {
                    title: 'JavaScript',
                    children: [
                        ['/interview/JavaScript/postMessage', 'postMessage'],
                        ['/interview/JavaScript/eventCommission', '事件委托'],
                        ['/interview/JavaScript/eventLoop', '事件循环'],
                        ['/interview/JavaScript/__proto__', '__proto__'],
                        ['/interview/JavaScript/ajax', 'ajax'],
                        ['/interview/JavaScript/new', 'new'],
                        ['/interview/JavaScript/call', 'call、apply、bind'],
                        ['/interview/JavaScript/this', 'this'],
                        ['/interview/JavaScript/debounce', '函数防抖和节流'],
                        ['/interview/JavaScript/reverse', '数组反转 '],
                    ]
                },
                {
                    title: '正则表达式',
                    children: [
                        ['/interview/reg/reg', '正则日积月累']
                    ]
                },
            ]

        }
    },
    //PWA配置
    serviceWorker: true,


}

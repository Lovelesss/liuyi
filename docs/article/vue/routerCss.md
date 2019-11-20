# 路由切换样式
---
exact: 默认选中,  
.router-link-active: 路由激活
```
<template>
    <nav class="gg-tab">
        <router-link tag="span" to="/playlist" exact>正在播放</router-link>
        <router-link tag="span" to="/recommend">推荐</router-link>
        <router-link tag="span" to="/search">搜索</router-link>
        <router-link tag="span" to="/person">我的歌单</router-link>
        <router-link tag="span" to="/history">我听过的</router-link>
    </nav>
</template>
```
```
<style lang="stylus" scoped>
    .gg-tab
        height 60px
        width 100%
        span
            display inline-block
            height 40px
            line-height 40px
            padding 0 20px
            margin-right 10px
            border 1px solid hsla(0, 0, 100%, .6)
            color rgba(255, 255, 255, .6)
            text-align center
            font-size 14px
            &:hover
                border 1px solid #fff
                color #fff
                cursor pointer
            &.router-link-active    // 路由激活样式
                border 1px solid #fff
                color #fff
</style>
```

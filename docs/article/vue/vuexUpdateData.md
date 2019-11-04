# Vuex修改数据
---
### 第一种方法:mutations同步修改
mutations同步修改：直接通过commit触发mutations。<br />
mutations有两个参数：第一个默认为state，第二个为自定义参数。<br />

city.vue文件
```
handleCityClick(city) {
    this.$store.commit('changeCity', city)
}
```
store.js文件
```
mutations: {
    changeCity(state, city) {
        state.city = city
    }
}
```
---
### 第二种方法:actions异步修改
actions异步修改：通过dispatch派发。<br />
actions有两个参数：第一个是与 store 实例具有相同方法和属性的 context 对象，第二个是自定义参数。<br />
第一个参数可以写成{commit} :相当于变量解构赋值 commit= context.commit。<br />
city.vue文件
```
handleCityClick(city) {
    this.$store.dispatch('actionChangeCity', city)
}
```
store.js文件
```
mutations: {
    changeCity(state, city) {
        state.city = city
    }
},
actions: {
    actionChangeCity(context, city) {
        context.commit('changeCity', city)
    }
}
//或者
/* actions: {
    actionChangeCity({commit}, city) {
        //commit('changeCity', city)
    }
} */

```
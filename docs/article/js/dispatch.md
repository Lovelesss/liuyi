# js自定义事件
---
一般使用dispatch派发自定义事件，派发之前需要创建和初始化。<br/>
即:创建—>初始化—>派发

#### 第一种方法
```
let div1 = document.getElementById('div1');
div1.addEventListener('alert', (event) => {
    console.log(event)
})
//创建
let evt = document.createEvent('HTMLEvents');
//初始化，参数：事件名，是否可以冒泡，是否阻止事件的默认操作
evt.initEvent('alert', false, false);
//触发
div1.dispatchEvent(evt);
```
#### 第二种方法
```
let div1 = document.getElementById('div1');
let evt2 = new Event('build');
div1.addEventListener('build', (event) => {
    console.log('自定义事件2')
});
div1.dispatchEvent(evt2);

```
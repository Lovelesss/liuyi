# keep-alive和activated
---
keep-alive可以缓存路由,请求相同时不再发送请求。<br/>
activated,deactivated这两个生命周期函数一定是要在使用了keep-alive组件后才会有的，否则则不存在。<br/>

当引入keep-alive的时候，页面第一次进入，钩子的触发顺序created-> mounted-> activated，退出时触发deactivated。当再次进入（前进或者后退）时，只触发activated。<br/>

事件挂载的方法等，只执行一次的放在 mounted 中；组件每次进去执行的方法放在 activated 中， activated 中的不管是否需要缓存多会执行。<br/>


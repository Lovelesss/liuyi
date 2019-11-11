# call、apply、bind的区别
***都是改变this的指向。*** <br>
call和apply其实是一样的，都是直接生效，区别在于call传参一个一个传，
apply直接传一个数组。
bind不是直接生效，而是返回一个函数。

```javascript
function sayHello(name, code) {
    console.log(`哦嗨哟 ${name} ${code}` );
}
const obj = {};
sayHello.call(obj, '一毛', '代号001');
sayHello.apply(obj, ['二毛', '代号002']);
const say = sayHello.bind(obj, '三毛', '代号003');
say();
```
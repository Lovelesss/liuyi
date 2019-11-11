# this
### 1. 简述this
#### this取值符合以下规则：
1. 在调用函数时使用new关键字，函数内的this是一个全新的对象。<br>
2. 如果apply、call或bind方法用于调用、创建一个函数，函数内的 this 就是作为参数传入这些方法的对象。 <br>
3. 当函数作为对象里的方法被调用时，函数内的this是调用该函数的对象。比如当obj.method()被调用时，函数内的 this 将绑定到obj对象。 <br>
4. 如果调用函数不符合上述规则，那么this的值指向全局对象（global object）。浏览器环境下this的值指向window对象，但是在严格模式下('use strict')，this的值为undefined。 <br>
5. 如果符合上述多个规则，则较高的规则（1 号最高，4 号最低）将决定this的值。 <br>
6. 如果该函数是 ES2015 中的箭头函数，将忽略上面的所有规则，this被设置为它被创建时的上下文。 <br>

### 2. this指向
如果要判断一个运行中函数的 this 绑定，就需要找到这个函数的直接调用位置。找到之后就可以顺序应用下面这四条规则来判断 this 的绑定对象。

1. 由 new 调用？绑定到新创建的对象。
2. 由 call 或者 apply （或者 bind ）调用？绑定到指定的对象。
3. 由上下文对象调用？绑定到那个上下文对象。
4. 默认：在严格模式下绑定到 undefined ，否则绑定到全局对象。

箭头函数内的this就是箭头函数外的那个this。
```javascript
const obj = {
    name: '二毛',
    age: 10,
    out() {
        const inner = () => {
            console.log(2 * this.age);
        };
        inner()
    }
};
obj.out()   // 20
```
[参考]<https://github.com/woai3c/Front-end-basic-knowledge/blob/master/JavaSciprt.md#%E8%AF%B7%E7%AE%80%E8%BF%B0JavaScript%E4%B8%AD%E7%9A%84this>
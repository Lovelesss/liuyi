# js对象深拷贝
---
如果要拷贝一个对象，需要做到下面两件事情。 <br/>
1.确保拷贝后的对象，与原对象具有同样的原型。 <br/>
2.确保拷贝后的对象，与原对象具有同样的实例属性。<br/>
#### 方法一:
```
let person = {
    name: '王五',
    age: 25,
    say: function () {
        console.log('hello ' + this.name);
    },
    child: {
        name: '二毛',
        age: 2
    },
    language: ['CN','EN','DE']

}
function objectCopy(source) {
    return Object.create(Object.getPrototypeOf(source)), Object.getOwnPropertyDescriptors(source)
}
objectCopy(person)
```
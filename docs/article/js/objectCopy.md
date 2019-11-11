# js对象深拷贝
---
如果要拷贝一个对象，需要做到下面两件事情。 <br/>
1.确保拷贝后的对象，与原对象具有同样的原型。 <br/>
2.确保拷贝后的对象，与原对象具有同样的实例属性。<br/>
#### 方法一
```javascript
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

};
function objectCopy(source) {
    return Object.create(Object.getPrototypeOf(source)), Object.getOwnPropertyDescriptors(source)
}
objectCopy(person)
```
弊端：包含引用类型的属性始终都会共享相应的值,比如:
修改拷贝后的对象的child.name，原对象也会发生改变。

#### 方法二
```javascript
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
};
const copy = JSON.parse(JSON.stringify(person))
```
弊端：不能拷贝对象中的方法，比如say

#### 方法三:递归
```javascript
function deepClone(obj) {
    const copyObj = Array.isArray(obj) ? [] : {};
    if(obj && typeof obj === 'object') {
        for (let key in obj) {
            if(obj.hasOwnProperty(key)) {
                if(obj[key] && typeof obj[key] === 'object') {
                    copyObj[key] = deepClone(obj[key])
                } else {
                    copyObj[key] = obj[key];
                }
            }
        }
    }
    return copyObj;
}
```

#### 方法四:第三方库(lodash)

# new一个对象经历了什么 
```javascript
function Cat(name) {
    this.name = name;
    this.getName = () => {
        console.log(this.name);
    }
}
```
1.创建一个新对象
```javascript
const blackCat = {};
```

2.设置新对象的constructor属性为构造函数的名称，设置新对象的__proto__属性指向构造函数的prototype对象
```
blackCat.constructor = Cat;
blackCat.__proto__ = Cat.prototype;
```

3.将this指向新对象
```
Cat.call(blackCat, '黑猫');
```
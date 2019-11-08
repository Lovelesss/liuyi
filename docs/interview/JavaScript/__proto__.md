# \_\_proto__、prototype
---
\_\_proto__(隐式原型)指向其构造函数的原型(prototype)。  <br>
实例化的对象没有prototype。
原型链：\_\_proto__  =>  null。
```javascript
function Test() {}
    const test = new Test();
    console.log(test.__proto__ === Test.prototype);  //true
    console.log(Test.__proto__ === Function.prototype);  //true
    console.log(Test.prototype.__proto__ === Object.prototype);  //true
    console.log(Object.prototype.__proto__);  //null
```

### 对象继承
#### 1.ES6继承
super关键字用于访问父对象上的函数。 <br>
**在子类中，super必须在this前调用，否则会报错。** <br>
super([arguments]); 访问父对象上的构造函数。 <br>
super.functionOnParent([arguments]); 访问对象上的方法
```javascript
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
}
const greenPoint = new ColorPoint(10, 20, 'green');
console.log(`x:${greenPoint.x}, y:${greenPoint.y}, color:${greenPoint.color}`)
console.log(greenPoint instanceof ColorPoint);   //true
console.log(greenPoint instanceof Point);  //true
```

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

#### 2. 原型链继承
```javascript
function Father() {
    this.prop = true;
    this.arr = ['a', 'b']
}
Father.prototype.getFatherValue = function () {
    return this.prop
};

function Son() {
    this.sonProp = false;
}
Son.prototype = new Father();
Son.prototype.getSonValue = function () {
    return this.sonProp
};
const instance = new Son();
console.log(instance.getFatherValue());
const instance2 = new Son();
//弊端
instance.arr.push('c');
console.log(instance.arr);   // ["a", "b", "c"]
console.log(instance2.arr);  // ["a", "b", "c"]
```
上例中把Son的prototype(原型)重写为Father的实例。 <br>
**instance.getFatherValue():**
* 首先在instance对象自身中找。若对象自身没找到
* 然后在Son.prototype中找。若Son.prototype中没找到
* 继续往上一层，Son.prototype.__proto__(Father.prototype)
* 依次类推，直到找到需要的属性或方法，或到达原型链顶端Object.prototype

弊端：
- 原型链中引用类型的属性会被所有实例共享的，即所有实例对象使用的是同一份数据，会相互影响。
- 在创建子类型(例如创建Son的实例)时,不能向超类型(例如Father)的构造函数中传递参数.

#### 3.借用构造函数
在子构造函数中调用父构造函数
```javascript
function Father() {
        this.arr = ['a', 'b'];
    }

function Son() {
    Father.call(this);
}

const instance = new Son();
const instance2 = new Son();

instance.arr.push('c');
console.log(instance.arr);  // ["a", "b", "c"]
console.log(instance2.arr);  // ["a", "b"]
```
实现传参
```javascript
function Father(name) {
    this.name = name
}
function Son(name) {
    Father.call(this, name);
}
const instance = new Son('小明');
console.log(instance.name);
```
弊端
```javascript
function Father() {
    this.arr = ['a', 'b'];
    this.getArr = function () {
        return this.arr
    }
}
Father.prototype.sayHello = function () {
    return 'hello world'
};
function Son() {
    Father.call(this);
}

const instance = new Son();
console.log(instance.getArr());  
console.log(instance.sayHello())  // instance.sayHello is not a function
```
1. 只能调用Father内部定义的属性和方法，原型(prototype)上定义的无法调用。
2. 破坏了复用性,每个实例都创建了一份副本


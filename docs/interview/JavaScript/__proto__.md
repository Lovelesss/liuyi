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
1. 只能调用Father内部定义的属性(实例属性)和方法，原型(prototype)上定义的无法调用。
2. 破坏了复用性,每个实例都创建了一份副本

#### 4. 组合继承(圆形链继承 + 借用构造函数)
```javascript
function Father(name) {
    this.name = name;
    this.arr = [1, 2, 3];
}
Father.prototype.getName = function () {
    return this.name
};
function Son(name, age) {
    Father.call(this, name);   //继承实例属性和方法
    this.age = age
}
Son.prototype = new Father();  //继承原型属性和方法
Son.prototype.getAge = function () {
    return this.age
};
const instance = new Son('小明', 12);
console.log(instance.getName(),instance.getAge())  // '小明' 12
```
弊端:调用两次父类的构造函数，造成消耗

#### 5. 原型式继承
Object.create:第一个参数是用作新对象原型的对象，第二个参数是一个为新对象定义额外属性的对象，一般来说，第二个参数可以省略
```javascript
Object.create(source, {})
```

#### 6. 寄生式继承
可以把寄生式继承看做是传进去一个对象，然后对该对象进行一定的加工，也就是增加一些方法来增强该对象，然后再返回一个包含新方法的对象的一个过程
```javascript
function createAnother(origin) {
    const clone = Object(origin);      //  通过调用函数创建一个新对象
    clone.sayHi = function() {
        console.log("hi");
    };
    return clone;
}
```
弊端:不能实现函数的复用

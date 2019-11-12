# 数组反转
---
#### 1. for循环  
##### push
```javascript
const arr = ['I', 'am', 'a', 'student'];
function reverseArray(arr) {
    const len = arr.length;
    const newArr = [];
    for (let i = len - 1; i >= 0;  i--) {
        newArr.push(arr[i]);
    }
    return newArr
}
console.log(reverseArray(arr))
```
#### unshift
```javascript
const arr = ['I', 'am', 'a', 'student'];
function reverseArray(arr) {
    const len = arr.length;
    const newArr = [];
    for (let i = 0; i < len;  i++) {
        newArr.unshift(arr[i]);
    }
    return newArr
}
console.log(reverseArray(arr))
```
#### 2. 
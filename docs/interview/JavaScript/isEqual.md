# 实现isEqual(判断两个对象是否相等)
---
```javascript
const obj1 = {
    a: 100,
    b: {
        x: 100,
        y: 200,
    }
};
const obj2 = {
    a: 100,
    b: {
        x: 100,
        y: 200,
    }
};
function isEqual(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj1 === obj2
    }
    if (obj1 === obj2) {
        return true
    }
    if (obj1 == null || obj2 == null) {
        return false
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false
    }
    for (let key in obj1) {
        if(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
            const res = isEqual(obj1[key], obj2[key]);
            if (!res) {
                return false
            }
        } else {
            return false
        }
    }
    return true
}
console.log(isEqual(obj1, obj2))
```
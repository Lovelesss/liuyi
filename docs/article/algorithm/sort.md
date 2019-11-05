# js排序算法
---
```
//排序算法
const arr = [9, 3, 1, 4, 2, 7, 8, 6, 5];

class Sort {
    constructor() {

    }

    //冒泡排序:稳定
    bubbleSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr
    }

    //选择排序:不稳定
    selectSort(arr) {
        const len = arr.length;
        let indexMin, temp;
        for (let i = 0; i < len - 1; i++) {
            indexMin = i;
            for (let j = i + 1; j < len; j++) {
                if (arr[indexMin] > arr[j]) {
                    indexMin = j;
                }
            }
            temp = arr[i];
            arr[i] = arr[indexMin];
            arr[indexMin] = temp;
        }
        return arr
    }

    //插入排序
    insertSort(arr) {
        let len = arr.length;
        let j, temp;
        for (let i = 1; i < len; i++) {
            j = i;
            temp = arr[i];
            while (j > 0 && arr[j - 1] > temp) {
                arr[j] = arr[j - 1];
                j--
            }
            arr[j] = temp;
        }
        return arr
    }

    //归并排序
    mergeSort(arr) {
        const merge = (left, right) => {
            const result = [];
            let il = 0;
            let ir = 0;
            while (il < left.length && ir < right.length) {
                if (left[il] < right[ir]) {
                    result.push(left[il]);
                    il++;
                } else {
                    result.push(right[ir]);
                    ir++
                }
            }
            while (il < left.length) {
                result.push(left[il]);
                il++;
            }
            while (ir < right.length) {
                result.push(right[ir]);
                ir++;
            }
            return result
        };
        const splitArr = arr => {
            if (arr.length === 1) {
                return arr
            }
            const mid = Math.floor(arr.length / 2);
            const left = arr.slice(0, mid);
            const right = arr.slice(mid, arr.length);
            console.log(`左:${left},右:${right}`);
            return merge(splitArr(left), splitArr(right));
        };
        return splitArr(arr)
    }

    //快速排序:分割法
    quickSort(arr) {
        if (arr.length <= 1) {
            return arr
        }
        const pivotIndex = Math.floor(arr.length / 2);
        const pivot = arr.splice(pivotIndex, 1)[0];
        const left = [];
        const right = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return [...this.quickSort(left), pivot, ...this.quickSort(right)]
    }
}

const sort = new Sort();
// console.log('冒泡排序==========');
// console.log(sort.bubbleSort(arr));
// console.log('选择排序==========');
// console.log(sort.selectSort(arr));
// console.log('插入排序==========');
// console.log(sort.insertSort(arr));
// console.log('归并排序==========');
// console.log(sort.mergeSort(arr));
console.log('快速排序==========');
console.log(sort.quickSort(arr));

```
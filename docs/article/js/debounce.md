# js防抖
---
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>定时器</title>
</head>
<body>
抖动：<input type="text" id="input">
<script>
    //debounce防抖
    function debounce(fn, delay) {
        let timer = null;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(() => {
                console.log('间隔1秒执行');
            },1000)
        }
    }
    document.querySelector('#input').addEventListener('keyup', debounce())
</script>
</body>
</html>

```
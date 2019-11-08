# 事件委托
---
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>

    </style>
</head>
<body>
<ul id="wrap">
    <li>苹果</li>
    <li>橘子</li>
    <li>梨子</li>
</ul>
<script>
    const wrap = document.getElementById('wrap');
    wrap.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
    });
    let li4 = document.createElement('li');
    li4.innerHTML = '葡萄';
    wrap.appendChild(li4);
</script>
</body>
</html>
```
虽然没有给li标签添加点击事件，但是父元素ul绑定了点击事情，根据
事件冒泡原理，点击li标签冒泡上去，执行父元素ul的事件。
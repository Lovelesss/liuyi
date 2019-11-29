# JS操作类名
- Node.classList.add("class")：添加class   
- Node.classList.remove("class")：移除class
- Node.classList.toggle("class")：切换class，有则移除，无则添加
- Node.classList.contains("class")：检测是否存在class

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .btn {
            font-size: 20px;
        }
        .active {
            color: red;
        }
    </style>
</head>
<body>
<div class="btn">提交</div>
<script>
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
        btn.classList.add('active')
        console.log(btn.classList.contains('active'))
    })
</script>
</body>
</html>

```

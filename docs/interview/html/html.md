# HTML相关面试题
---
### 1.自定义属性data-
通过对象的dataset属性获取,不支持getAttribute获取
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>html自定义属性data-</title>
</head>
<body>
<div data-index="1" id="div">
    获取div的index
</div>
<script>
const div = document.getElementById('div');
console.log(div.dataset.index);
</script>
</body>
</html>
```

### 2.移动端适配
```
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```
### 3.页面标题icon
```
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"> 
```
### 4.下载图片或者文件
```
<a href="../images/avatar.jpg" download>下载</a>
```
### 5.电话链接
```
<a href="tel:18111648931">打电话给某人</a>
```
### 5.发邮件
```
<a href="mailto:xxx@gmail.com">发邮件给某人</a>
```
### 6.一个简单的表格
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>表格</title>
    <style>
        table {
            border-collapse: collapse;
        }
        th,td {
            border: 1px solid #999;
        }
    </style>
</head>
<body>
<table>
    <tr>
        <th>第一列</th>
        <th>第二列</th>
        <th>第三列</th>
    </tr>
    <tr>
        <td>1.1</td>
        <td>1.2</td>
        <td>1.3</td>
    </tr>
    <tr>
        <td>2.1</td>
        <td>2.2</td>
        <td>2.3</td>
    </tr>
    <tr>
        <td colspan="3">独占三列</td>
    </tr>
</table>
<script>

</script>
</body>
</html>
```
### 7. input中 type=hidden
```
<input type="hidden" name="xiaoming" value="888">
```
这一组代码在页面显示上没有任何效果，但点完“提交”后，这组代码里边的相关参数是会提交给后台的。<br>
可以防止CSRF。后台可以通过这段代码返回值，前台提交表单时携带这个值，这样后台可以进行校验。

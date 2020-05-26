# 简单图片上传并预览
window.URL.createObjectURL(obj):将图片对象转换成url
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>图片上传并预览</title>
</head>
<body>
<h3>请选择一张图片</h3>
<form action="" enctype="multipart/form-data">
    <label for="imgUpload">
        <input type="file" id="imgUpload">
    </label>
</form>
<div class="imgWrap">
    <img src="" id="img" alt="">
</div>
<script>
    const imgFile = document.getElementById('imgUpload');
    const img = document.getElementById('img');
    imgFile.addEventListener('change', function (e) {
        const fileObj = imgFile.files[0];
        if (fileObj.type.indexOf('image/') === -1) {
            return '文件非图片类型'
        }
        img.src = window.URL.createObjectURL(fileObj)
    })
</script>
</body>
</html>
```
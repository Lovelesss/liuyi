# drag
```
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .box {
            width: 50px;
            height: 50px;
            margin-bottom: 10px;
            border-radius: 50%;
            background: forestgreen;
            line-height: 50px;
            text-align: center;
            font-size: 14px;
            color: #fff;
        }
        .target {
            width: 400px;
            height: 400px;
            margin-top: 20px;
            padding: 15px;
            border: 1px solid forestgreen;
        }
        .target .box {
            float: left;
            margin-right: 10px;
        }
    </style>
</head>
<body>
<div class="box" draggable="true">盒子1</div>
<div class="box" draggable="true">盒子2</div>
<div class="box" draggable="true">盒子3</div>
<div class="target"></div>
<script>
    const box = document.querySelectorAll('.box');
    const target = document.querySelector('.target');
    let temp;
    box.forEach( box => {
        box.addEventListener('dragstart', function (e) {
            console.log('dragstart');
            console.log(this);
            temp = this
        });
        box.addEventListener('dragend', function (e) {
            console.log('dragend');
            temp = null;
        });
    });

    target.addEventListener('dragover', function (e) {
        e.preventDefault()
    });
    target.addEventListener('drop', function (e) {
        this.appendChild(temp)
    })
</script>
</body>
</html>

```

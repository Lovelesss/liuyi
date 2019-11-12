# 函数防抖和节流
---
防抖(debounce)：在函数需要频繁触发时，只有当有足够空闲的时间时，才执行一次。就好像在百度搜索时，每次输入之后都有联想词弹出，这个控制联想词的方法就不可能是输入框内容一改变就触发的，他一定是当你结束输入一段时间之后才会触发。

节流(thorttle)：预定一个函数只有在大于等于执行周期时才执行，周期内调用不执行。就好像你在淘宝抢购某一件限量热卖商品时，你不断点刷新点购买，可是总有一段时间你点上是没有效果，这里就用到了节流，就是怕点的太快导致系统出现bug。

区别：在发生持续触发事件时，防抖设置事件延迟并在空闲时间去触发事件，而节流则是隔一定的时间触发一次。

### 1.函数防抖
函数防抖运用的实际场景有：实时搜索，拖拽，登录用户名密码格式验证等等。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>函数防抖</title>
</head>
<body>
<label for="input">输入</label>
<input type="text" id="input">
<script>
    const input = document.getElementById('input');
    let timer = null;
    input.oninput = function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            console.log(this.value)
        }, 1000)
    }
</script>
</body>
</html>
```

### 2.函数节流
函数节流运用的实际场景有：窗口调整，页面滚动，抢购疯狂点击等等。

以疯狂点击为例，限制用户在一秒内无论点多少次，都只算一次
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>函数节流</title>
</head>
<body>
<div id="show">0</div>
<button id="btn">点击</button>
<script>
    const show = document.getElementById('show');
    const btn = document.getElementById('btn');
    let clickTime = 0;
    btn.addEventListener('click', () => {
        let nowTime = new Date().getTime();
        if(nowTime - clickTime > 1000) {
            console.log(clickTime,nowTime);
            show.innerHTML = parseInt(show.innerHTML) + 1;
            clickTime = nowTime;
        }
    })
</script>
</body>
</html>
```
[参考]<https://blog.csdn.net/jacoox/article/details/80719456>
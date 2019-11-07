### css相关面试题
---

### 1 属性选择器
#### 1.1 [attr]
选择所有具有class属性的div元素
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>属性选择器</title>
    <style lang="stylus">
        div[class] {
            color: red
        }
    </style>
</head>
<body>
<div id="first">first</div>
<div class="second">second</div>
<div class="third">third</div>
</body>
</html>
```

#### 1.2 [attr=val]
选择所有class=second的div元素
```css
div[class="second"] {
    color: red
}
```

#### 1.3 [attr~=val]
选择class包含common的div元素
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>选择器</title>
    <style lang="stylus">
        div[class~="common"] {
            color: forestgreen;
        }
    </style>
</head>
<body>
<div id="first">first</div>
<div class="common second">second</div>
<div class="common third">third</div>
</body>
</html>
```
#### 1.4 ^ $ *
^:选择以co开头的
```css
div[class^="co"] {
    color: forestgreen;
}
```
$:以co结尾的
```css
div[class$="co"] {
    color: forestgreen;
}
```
*:通配，包含co的
```css
div[class*="co"] {
    color: forestgreen;
}
```

### 2.css权重
style内联：1000  <br>
id选择器：100   <br>
类选择器：10  <br>
元素选择器: 1   <br>

### 3.单位
em：相对于父元素 <br>
rem: 相对于跟元素  <br>
vw、vh:相对于视口

### 4.行内元素之间空隙的产生和去除
之所以有空隙，是因为html文档里边两个span之间有很多空白字符。
#### 第一种方法：把空格去掉
```html
<div class="wrapper">
  <span class="box">111</span><span class="box">222</span>
</div>
```
#### 第二种方法：把包含两个span的div字体先设置为0(这里的空白字符就没有宽度高度，不占位)，然后再在box里边去设置回去。
```css
.wrapper {
    font-size: 0;
}
.span {
    font-size: 12px;
    border: 1px solid forestgreen;
}
```
### 5.单行文本溢出省略号
```
white-space: nowrap;  /*首先，强制文本不换行*/
overflow: hidden;  /*其次，隐藏溢出*/
text-overflow: ellipsis;  /*最后，对溢出的文本用 ellipsis 省略号代替*/
```




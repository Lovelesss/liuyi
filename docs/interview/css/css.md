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


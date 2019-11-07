# 浮动相关
---
### 1.三栏布局，两侧固定，中间自适应
#### 第一种方法：浮动
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>html自定义属性data-</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .aside {
            box-sizing: border-box;
            float: right;
            width: 200px;
            height: 100vh;
            background: lemonchiffon;
        }
        .left {
            float: left;
            border-right: 2px solid #333;
        }
        .right {
            float: right;
            border-left: 2px solid #333;
        }
        .main {
            margin-left: 200px;
            margin-right: 200px;
            height: 100vh;
            background: #eee;
        }

    </style>
</head>
<body
<!--这样排序原因，先后渲染问题-->
<div class="aside left">左侧边栏</div>
<div class="aside right">右侧边栏</div>
<div class="main">主要区域</div>
</body>
</html>
```

### 2.清除浮动
#### 第一种方法：空div clear:both

#### 第二种方法：父元素加伪元素
```css
.clearfix::after {
    content: '';
    display: block;
    clear: both;
}
```

#### 第三种方法：产生BFC
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>html自定义属性data-</title>
    <style>
        ul {
            list-style: none;
            border: 1px solid forestgreen;
            /*产生BFC，计算浮动元素的高度*/
            overflow: hidden;
            /*如果没有清除浮动不生效，因为父元素没有高度*/
            background: darkcyan;
        }
        li {
            float: left;
        }
    </style>
</head>
<body>
<ul>
    <li>111</li>
    <li>222</li>
</ul>
</body>
</html>
```

### 3.如何形成BFC
**·** body 根元素； <br>
**·** 浮动元素：float 不为none的属性值； <br>
**·** 绝对定位元素：position (absolute、fixed)； <br>
**·** display为： inline-block、table-cells、flex； <br>
**·** overflow 除了visible以外的值 (hidden、auto、scroll)； <br>

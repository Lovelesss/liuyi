# 开发博客问题记录
#### 导航栏淡入实现：淡出没有生效(待解决)
```css
.toShow {
  animation: fadeInDown 1s;
}
/*从上淡入*/
@keyframes fadeInDown {
  from {
    transform: translate(0, -100vh);
  }
  to {
    transform: translate(0, 0);
  }
}
```
#### 弹窗显示隐藏滚动条
```javascript
document.documentElement.style.overflowY = 'hidden'
document.documentElement.style.overflowY = 'scroll'
```

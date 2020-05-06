# requestAnimationFrame
---
requestAnimationFrame(callback):callback一般每秒执行60次
```javascript
const box = document.querySelector('.box');
const maxWidth = 640;
function Animation() {
    box.style.width = parseInt(box.style.width) + 3 + 'px';
    if (parseInt(box.style.width) < 640) {
        window.requestAnimationFrame(Animation)
    }
}
Animation()
```
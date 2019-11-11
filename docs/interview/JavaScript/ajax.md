# Ajax
---

```javascript
function loadAjax(method, url) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            return xhr.responseText
        }
    };
    xhr.open(method, url);
    xhr.send();
}
```
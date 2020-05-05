# 查询url参数
---
```javascript
function queryParam(name) {
    const str = location.search.slice(1);
    const p = new URLSearchParams(str);
    return p.get(name)
}
```
# audio初探
---
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>audio</title>
</head>
<body>
<button id="play">播放</button>
<button id="stop">暂停</button>
<button id="dec">减小音量</button>
<button id="inc">增加音量</button>
<audio id="audio" style="height: 80px; width: 400px;" src="test.mp3" controls></audio>
<script>
    const play = document.getElementById('play');
    const stop = document.getElementById('stop');
    const audio = document.getElementById('audio');
    const dec = document.getElementById('dec');
    const inc = document.getElementById('add');
    play.addEventListener('click', () => {
        audio.play();
    });
    stop.addEventListener('click', () => {
        audio.pause();
    });
    inc.addEventListener('click', () => {
        audio.volume -= 0.2
    });
    add.addEventListener('click', () => {
        audio.volume += 0.2
    })
</script>
</body>
</html>

```

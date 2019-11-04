# ES6类的继承
---
```
<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>class的继承</title>
   </head>
   <body>
   <script>
       class Point {
           constructor(x, y) {
               this.x = x;
               this.y = y
           };
           toString() {
               return `x坐标:${this.x},y坐标:${this.y}`
           }
       }
       class ColorPoint extends Point {
           constructor(x, y, color) {
               super(x, y);
               this.color = color;
           }
           toString() {
               return this.color + ' ' + super.toString();
           }
       }
       let point = new ColorPoint(23, 45, 'red');
       console.log(point.toString())
       //
       console.log(Reflect.getPrototypeOf(ColorPoint) === Point)
   </script>
   </body>
   </html>
```
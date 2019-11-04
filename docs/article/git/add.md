# git提交代码
---
进入项目目录。

初始化一个git仓库：
```
git init
```
提交文件到暂存区：
```
git add .    //提交当前目录所有文件到暂存区
git add readme.txt    //提交指定文件
```
添加暂存区内容到本地仓库
```
git commit -m '第一次提交'
```
添加远程仓库
```
git remote add origin https://github.com/Lovelesss/vue-shop
```
把本地仓库内容推送到远程库

```
//第一次提交用，-u指定origin为默认主机，之后直接用git push
git push -u origin master
```

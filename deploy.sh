#!/usr/bin/env sh

git init
git add .
git commit -m '初始化博客'
git remote add origin git@github.com:Lovelesss/liuyi.git
git push -u origin master

sudo npm run docs:build

cd docs/.vuepress/dist

echo 'jvliuyi.xyz' > CNAME

git init

git add .
git commit -m '提交分支pages'
# git remote add origin git@github.com:Lovelesss/liuyi.git
git push -f git@github.com:Lovelesss/liuyi.git master:gh-pages
# git push -u origin master

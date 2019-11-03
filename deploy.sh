#!/usr/bin/env sh

# 提交主分支
# git init
git add .
git commit -m 'deploy'
# git remote add origin git@github.com:Lovelesss/liuyi.git
# git push -u origin master
git push

# 提交gh-pages分支
sudo npm run docs:build

cd docs/.vuepress/dist

echo 'jvliuyi.xyz' > CNAME

git init

git add .
git commit -m 'deploy'
git push -f git@github.com:Lovelesss/liuyi.git master:gh-pages

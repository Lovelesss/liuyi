# 学习git
---
初始化仓库时，Git会自动创建一个master分支。
git add：将文件修改提交到暂存区
git commit：把暂存区所有内容提交到当前分支。只会提交
add过的内容，add以后修改的文件不会提交。  
git status: 查看仓库当前的状态。  
git diff: 查看修改详细信息。  
git log: 查看历史提交日志。--pretty=oneline(单行显示)

### 穿梭
#### 版本回退几种方法
原理：git内部有个指向当前版本的HEAD指针，修改版本时，修改指针指向即可。  
1. git reset --hard HEAD^ (HEAD^^, HEAD^^^, 或HEAD~99)。  
2. 回退以后想重新回到之后的版本，找到版本号：git reset --hard c5f36ae  
3. 当找不到版本号时：git reflog(查看所有操作记录，包括删除的)
#### 撤销更改
git checkout -- \<file>：文件回到最近一次git commit或git add时的状态。
git reset HEAD readme.txt：把暂存区的文件撤销，回到工作区，但是不会撤销文件修改
#### 总而言之
1. 没有git add时，用git checkout -- file
2. 已经git add时，先git reset HEAD <file>回退到1，再按1操作
3. 已经git commit时，用git reset回退版本
4. 已推送到远程库，……
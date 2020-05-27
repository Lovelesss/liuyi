# 学习git
---
初始化仓库时，Git会自动创建一个master分支。
git add：将文件修改提交到暂存区
git commit：把暂存区所有内容提交到当前分支。只会提交
add过的内容，add以后修改的文件不会提交。  
git status: 查看仓库当前的状态。  
git diff: 查看修改详细信息。  
git log: 查看历史提交日志。--pretty=oneline(单行显示)

### 1. 穿梭
#### 版本回退几种方法
原理：git内部有个指向当前版本的HEAD指针，修改版本时，修改指针指向即可。    
1. git reset --hard HEAD^ (HEAD^^, HEAD^^^, 或HEAD~99)。  
2. 回退以后想重新回到之后的版本，找到版本号：git reset --hard c5f36ae  
3. 当找不到版本号时：git reflog(查看所有操作记录，包括删除的)
#### 撤销更改
git checkout -- \<file\>：文件回到最近一次git commit或git add时的状态。  
git reset HEAD readme.txt：把暂存区的文件撤销，回到工作区，但是不会撤销文件修改
#### 总而言之
1. 没有git add时，用git checkout -- file
2. 已经git add时，先git reset HEAD \<file\>回退到1，再按1操作
3. 已经git commit时，用git reset回退版本
4. 已推送到远程库，……

删除文件：
确实要删除时，git rm \<file\>：从版本库删除文件。
误删想要恢复：git checkout -- \<file\>

### 2. 远程仓库
创建ssh：ssh-keygen -t rsa -C "youremail@example.com"  
关联远程仓库：git remote add origin git@github.com:Lovelesss/git-learn.git  
第一次推送：git push -u origin master  
-u会把本地master分支和远程master分支关联，之后直接使用git push  
git clone \<url\>：克隆远程仓库

### 3. 分支
#### 创建合并分支,修改分支需要commit
创建dev分支：git branch dev  
切换：git checkout dev  
创建切换：git checkout -b dev  
查看分支：git branch  
合并分支：首先切换到主分支，git merge dev  
删除分支：git branch -d dev  

新版本创建切换分支：git switch -c dev  
切换分支：git switch dev  
合并分支冲突，可以通过手动修改合并结果再提交  
查看合并分支图：git log --graph

遗留问题：--no-f模式和fast forward模式

#### 当前分支工作未做完，需要取另一个分支修改bug
首先git add当前分支，然后用git stash save "save message"临时存储，切换到其他分支进行修复，修复完以后切换到当前分支进行合并  
查看所有stash：git stash list   
恢复stash堆栈中内容：  num从0开始,省略的话默认为栈顶  
a. git stash apply stash@{num} (stash不会删除)，需用git stash drop stash@{num} 删除  
b. git stash pop stash@{num}，恢复的同时删除  
删除stash：git stash clear  
git cherry-pick c5f36ae：复制一个特定的提交到当前分支

git branch -D feature：强行删除已提交但还未合并的feature分支

### 4. 多人协作
查看远程分支：git remote，加上-v参数显示更详细  
推送分支：git push origin master(master分支)  
git push origin dev(dev分支)  
其他的如果没有多人协作的分支可以看心情推送

#### 抓取远程分支
第二位开发者：git clone url到本地，只能看到master分支。  
需通过git checkout -b dev origin/dev创建本地dev分支，并拉取远程origin/dev分支。  
假设第二位开发者提交了test.txt到远程dev分支，第一位开发者也提交了test.txt到dev分支，
此时第二位开发者会报错被拒绝提交。  
需要通过git pull拉取远程dev分支，但此时会报错：本地dev分支与远程dev分支未建立链接，
需通过git branch --set-upstream-to=origin/dev dev建立连接，再pull,之后解决冲突。

#### 总结
多人协作的工作模式通常是这样：  
a. 首先，可以试图用git push origin \<branch-name\>推送自己的修改；  
b. 如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并；  
c. 如果合并有冲突，则解决冲突，并在本地提交；  
d. 没有冲突或者解决掉冲突后，再用git push origin \<branch-name\>推送就能成功。  
如果git pull提示no tracking information，则说明本地分支和远程分支的链接关系没有创建，用命令git branch --set-upstream-to \<branch-name\> origin/\<branch-name\>。  




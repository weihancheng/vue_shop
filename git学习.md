```
    // 添加到本地仓库
    git add .  

    // git 提交信息
    git commit -m "[你的提交信息]"

    // git 上传
    git push -u origin [分支名称]

    // 查看状态
    git status

    // 新建分支并切换到分支处
    git checkout -b [分支名称]

    // 切换分支
    git checkout [分支名称]

    // 查看分支
    git branch

    // 创建分支
    git branch [分支名称]

    // 删除分支
    git branch -d [分支名称]

    // 将远程主机的最新内容拉到本地，用户在检查了以后决定是否合并到工作本机分支中
    git fetch

    // 本地新建一个temp分支，并将远程origin仓库的master分支代码下载到本地temp分支
    git fetch origin master:temp  

    // 比较远程代码与本地代码的区别
    git diff temp

    // 将temp分支合并到本地master分支
    git merge temp

    // 是git fetch和git merge两个步骤的合并
    git pull
```
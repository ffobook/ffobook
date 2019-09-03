# 如何贡献我的源代码

此文档介绍了 FFOBook 项目的组成以及运转机制，您提交的代码将给 FFOBook 项目带来什么好处，以及如何才能加入我们的行列。

## 通过 Github 贡献代码

FFOBook 目前使用 Git 来控制程序版本，如果你想为 FFOBook 贡献源代码，请先大致了解 Git 的使用方法。我们目前把项目托管在 GitHub 上，任何 GitHub 用户都可以向这个项目贡献代码。

参与的方式很简单，`fork`一份 FFOBook 的代码到你的仓库中，修改后提交，并向我们发起`pull request`申请，我们会及时对代码进行审查并处理你的合并申请。审查通过后，你的代码将被`merge`进我们的仓库中，这样你就会自动出现在贡献者名单里了，非常方便。

我们希望你贡献的代码符合：

- 与原文档相似的行文规范
- 简单明了的文本，能让其他人读懂
- 遵循 [署名-非商业性使用-相同方式共享](https://creativecommons.org/licenses/by-nc-sa/3.0/cn/) 开源协议

**如果想要了解更多细节或有任何疑问，请继续阅读下面的内容**

### 注意事项

- 文本文档（以`.md`为后缀的文件）存在于`docs`文件夹下；
- 静态资源（如图片等）存在于`static`文件夹下，引用时按照相对路径引用，例如`/static/images/...`；

- CI faild 自动化部署失败基本是 teadocs 本身导致的，因此不必在意；

## GitHub Issue

GitHub 提供了 Issue 功能，该功能可以用于：

- 提出 bug
- 提出功能改进
- 反馈使用体验
- 提出修改意见

该功能不应该用于：

- 不友善的言论

## 快速修改

**GitHub 提供了快速编辑文件的功能**

1. 登录 GitHub 帐号；
2. 浏览项目文件，找到要进行修改的文件；
3. 点击右上角铅笔图标进行修改；
4. 填写 `Commit changes` 相关内容（Title 必填）；
5. 提交修改，等待 CI 验证和管理员合并。

**若您需要一次提交大量修改，请继续阅读下面的内容**

## 完整流程

1. `fork`本项目；
2. 克隆(`clone`)你 `fork` 的项目到本地；
3. 新建分支(`branch`)并检出(`checkout`)新分支；
4. 添加本项目到你的本地 git 仓库作为上游(`upstream`)；
5. ~~进行修改，若你的修改包含方法或函数的增减，请记得修改[单元测试文件](https://www.kancloud.cn/xiak/github/tests)；~~
6. 变基（衍合 `rebase`）你的分支到上游 master 分支；
7. `push` 你的本地仓库到 GitHub；
8. 提交 `pull request`；
9. 等待 CI 验证（若不通过则重复 5~7，GitHub 会自动更新你的 `pull request`）；
10. 等待管理员处理，并及时 `rebase` 你的分支到上游 master 分支（若上游 master 分支有修改）。

*若有必要，可以 git push -f 强行推送 rebase 后的分支到自己的 fork*

*绝对不可以使用 git push -f 强行推送修改到上游*

### 注意事项

- 若对上述流程有任何不清楚的地方，请查阅 GIT 教程，如 [这个](http://backlogtool.com/git-guide/cn/)；
- 变基及交互式变基操作参见 [Git 交互式变基](http://pakchoi.me/2015/03/17/git-interactive-rebase/)

## 推荐资源

### 开发环境

- Node.js
- Teadocs (基于 Node.js)

### 编辑器

Typora 编辑器

或其他 Markdown 编辑器

### Git GUI

- SourceTree
- GitHub Desktop

或其他 Git 图形界面客户端
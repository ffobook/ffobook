# 技能改键

改键的最佳方案毫无疑问是**AutoHotKey(AHK)**，它是专门用于改键的自动化工具。如果你想要使用AHK，请先到[AutoHotKey官网](https://www.autohotkey.com/)下载安装程序并进行安装（或直接点击[下载链接](https://www.autohotkey.com/download/ahk-install.exe)下载）。

首先你要创建编写一个脚本文件，才能运行它用于改键。按照以下步骤执行：

> 1. 在桌面或您选择的文件夹中右键点击空白处。
> 2. 在菜单中，选择 *新建-> AutoHotkey 脚本*。
> 3. 输入文件名，确保它以 **.ahk** 结尾. 例如：`ffoskill.ahk`。
> 4. 右键点击此文件并选择 Edit Script。
> 5. 在新的空行中，输入下列内容：`q::!1`。

在上面的语句行中，`!`键表示`Alt`键，双冒号`::`表示每次按下此热键时会执行其后续命令，所以这句语句表示按下`q`键来激活`Alt + 1`键。要试用此脚本，请继续下列操作：

> 1. 保存并关闭此文件。
> 2. 双击此文件来运行。在任务栏通知区域会出现新的图标。
> 3. 按下`q`键，会自动触发`Alt + 1`技能。
> 4. 要退出或编辑此脚本，则在任务栏通知区域的绿色 “H” 图标上*点击右键->Exit*。

注意：

- 多个脚本可以同时运行，其中的每个脚本在任务栏通知区域使用自己的图标。
- 每个脚本可以包含多个 [热键](http://ahkcn.sourceforge.net/docs/Hotkeys.htm) 和 [热字串](http://ahkcn.sourceforge.net/docs/Hotstrings.htm)。
- 要让您的脚本在启动计算机时自动运行，[请在开始菜单的启动文件夹中给您的脚本创建快捷方式](http://ahkcn.sourceforge.net/docs/FAQ.htm#Startup)。
- 要想暂时让您的脚本失效，则右击任务栏 “H” 图标，选择 Suspend Hotkeys。

![](/static/images/trick/keyboard.svg)

http://www.keyboard-layout-editor.com/#/
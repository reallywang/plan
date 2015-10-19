# electron构建桌面应用

标签（空格分隔）： 新技术

---

1. 安装
 
全局安装：`npm install electron-prebuilt -g`
2. hello world 体验

目录结构：
        
    app/
    |----main.js
    |----index.html
    |----package.json
        
3. 文件说明

  main.js ---js入口文件

  index.html--- app应用文件

  package.json---配置文件

4. 运行hello world!
 
  进入app路径，执行`electron .`

5. 进程模块

node语法;

- app 
 
控制app的生命周期

	var app=require('app');
	app.on('window-all-closed',function(){
		app.quit();
	});
	
事件


| 名称 | 描述|
|---| --- |
|`will-finish-launching`|在app的完成基本启动，as ready此时可以设置监听`open-file`和`open-url`事件,并且开启崩溃记录和自动更新。|
|`ready`|当electron完成初始化的时候触发|
|`window-all-closed`|所有的窗口关闭时触发，当开发者调用`app.quit()`或用户按下`cmd+Q`|
|`before-quit`|在应用关闭所有窗口之前退出,调用`event.preventDefault()`会阻止默认行为|
|`will-quit`|所有的窗口都已关闭，app即将退出|
|`quit`|退出|
|`open-file`|用户使用应用程序打开一个文件|
|`open-url`|用应用程序打开url|
|`activate`|应用程序激活时，触发|
|`browser-window-blur`|浏览窗口失去焦点时触发|
|`browser-window-focus`|浏览窗口获得焦点时|
|`browser-window-created`|浏览窗口创建时|
|`select-certificate`|客户端请求证书时触发|
|`gpu-process-crashed`|当gpu进程崩溃时触发|

方法


 |方法|描述|
 |---|---|
 |`app.quit()`|关闭所有的窗口，`before-quit`事件首先触发，`will-quit`事件即将被触发，应用程序终止，此事件保所有的`berforeunload`和`unload`事件处理被成功的执行，也有可能在`beforeunload`事件处理函数中返回`false`|
 |`app.getAppPath()`|返回当前应用的路径|
 |`app.getPath(name)`|检索路径|
 |`app.setPath(name,path)`|设置路径|
 |`app.getVersion()`|获得版本号，定义在package中的version|
 |`app.getName()`|返回app的名字，定义在package内的name|
|`app.getLocale()`| 返回当前应用的语言环境|
|`app.resolveProxy(url，callback)`|设置代理|
|`app.addRecentDocument(path)`|在当前文档列表中增加url|
|`app.clearRecentDocument(path)`|清空当前文档列表|
|`app.setUserTasks(tasks) windows`|在跳转列表中添加任务|
|`app.commandLine.appendSwitch(switch[,value])`|命令行开关|
|`app.commandLine.appendArgument(value)`|在命令行中增添格式正确的参数|
|`app.dock.bounce([type]) type:critical/informational(default) OS` |app dock icon容器的反弹效果 |
|`app.dock.cancelBounce(id)  OS`|取消反弹的id|
|`app.dock.setBadge(text) OS`|设置在dock落款显示的文字|
|`app.dock.getBadge()  OS`|返回dock的文字|
|`app.dock.hide() OS`|隐藏dock|
|`app.dock.show() OS`|显示dock|
|`app.dock.setMenu(menu) OS`|设置dock的菜单|


- autoUpdater

    自动更新，仅在OS X支持
    
- BrowserWindow
    用于创建浏览器窗口。
    - BrowserWindow创建窗口
是一个类名，`new BrowserWindow(options)`来创建一个具有相关属性的新的浏览窗口。

    |options|说明|
    |---|---|
    |width|窗口的宽|
    |x|在屏幕上窗口的左偏移量|
    |skip-taskbar|是否在任务栏显示|
    
    此处省略好多字，详情请戳:[BrowserWindow窗口属性](https://github.com/atom/electron/blob/master/docs/api/browser-window.md "options")
    
    - BrowserWindow事件
    
    |Events|描述|
    |---|---|
|`page-title-updated`|文档title改变|
|`closed`|窗口关闭|
|`close`|窗口即将被关闭|
|`unresponsive`|网页反应迟钝|
|`move`|窗口移动到新的位置|
|`enter-full-screen`|窗口进入全屏状态|
|`enter-html-full-screen`|窗口由html接口触发进入全屏状态|
|`app-command`|app command 调用的时候|


 
 - BrowserWindow方法
 
    
     |method|描述|
    |---|---|
    |`BrowserWindow.getAllWindows()`|返回打开浏览窗口的数组|
|`BrowserWindow.getFocusedWidow()`|返回app中获得焦点的窗口|
|||



  



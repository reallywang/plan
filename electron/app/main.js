'use strict';
var app=require('app');
app.commandLine.appendSwitch('remote-debugging-port','8351');
app.commandLine.appendSwitch('host-rules','MAP * 127.0.0.1');
var BrowserWindow=require('browser-window');
require('crash-reporter').start();
var mainWidow=null;
//quit when all windows are closed
	app.on('window-all-closed',function(){
		if(process.platform!='darwin'){
			app.quit();
		}
	});


app.on('ready',function(){
	//create the browser window 
	mainWidow=new BrowserWindow({
		height:600,
		width:800
	});
	//load the index.html of the app.
	mainWidow.loadUrl('file://'+__dirname+'/index.html');
	//mainWidow.loadUrl('https://www.baidu.com');
	//mainWidow.openDevTools();
	mainWidow.on('closed',function(){
		mainWidow=null;
	});
});

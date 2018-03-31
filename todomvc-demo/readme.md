# TodoMVC App Template

> Template used for creating [TodoMVC](http://todomvc.com) apps

![](https://github.com/tastejs/todomvc-app-css/raw/master/screenshot.png)


## Getting started

- Read the [Application Specification](https://github.com/tastejs/todomvc/blob/master/app-spec.md) before touching the template.

- Delete this file and rename `app-readme.md` to `readme.md` and fill it out.

- Clone this repo and install the dependencies with [npm](https://npmjs.com) by running: `npm install`.


## License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br />This <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" rel="dct:type">work</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://sindresorhus.com" property="cc:attributionName" rel="cc:attributionURL">TasteJS</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/deed.en_US">Creative Commons Attribution 4.0 International License</a>.


#实现步骤
-环境搭建
-建立基本的mvc模型，实现双向数据绑定
	+实现任务下拉列表的数据生成
	+完成案例的基本效果（已完成任务和未完成任务特效）
-添加数据
	+输入框输入数据后，按回车键，内容添加到下面的任务列表中
-删除数据
	+点击选项后面的叉，删除当前数据
	+点击clear completed按钮功能实现
-编辑数据
	+双击某个选项，当前选项就会变换成输入框模式
	+当按回车或者失去焦点时候，输入框就会消失，选项内容为输入框最后更改的内容
	+全选和全不选功能
-筛选数据
	+All、Active、Completed功能实现
	

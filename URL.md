`http://101.132.177.145:8001/Project1/Client/ts_fengzhi12/gameclient/bin/index.html`  
`http://192.168.0.87:8001/Project1/Client/trunk/gameclient/bin/?user=chief_st001&tcp=wss://dev-ws-server.game.wanhuir.com/st&debug=1`

*玩家名*
user=openid  

*是否是测试*  
debug=1

*版本号*
ver=`v1_0_12`  
dev服务器的`v1_0_main_44_20240201`  

*后台*  
sy_url=https://server.game.wanhuir.com

*TCP*  
tcp="ws://192.168.0.117:8503"

local=1 使用localhost资源  

//提审测试开关1:开启0:关闭(此时会强制关闭提审状态)  
ts=1  

跳过小游戏  
skipgame=1  

显示跳过战斗按钮  
skip=1  

战斗中去掉日志  
nofightlog=1

战斗结算界面延迟(秒)  
fight_delay

本周几  
week  

设置当前的引导任务id  
guideTaskId=19  

开始性能监测  
stat=1  

非联网  
`localgame=1`  

//同步模式  
sync=1

skinStyle=1	//1磕头 2战鼓

cbsgTunnelOpenType //模拟后台 1战鼓 2磕头 默认不传模拟undefined

all_bin:
* 指定配置的路径 `all_bin=http://101.132.177.145:8001/Project1/Client/ts_fengzhi39_D1/resource/all.bin`

clienttype:  

* 无值:默认主线戳爆版本   
* 1: 0.1折扣版本

asset:
* http://127.0.0.1:8001/Project1/Client/trunk/resource/  

`maxride=27` 设置最大可读取的坐骑id


sdk_platform=0
* 客户端设置SDK类型,逻辑依然以`initConfig.platform`的值为准。

sider=1 
* 是否从抖音侧边栏进入

openall=1  
设置所有的`t_Func`表中的所有的f_close=0,开启所有的功能  

no_ta=1  
不使用数数

maskhide=1  
隐藏两边的背景  

`debug_fight_war3`  
魔兽角色战斗测试  

`clienttime`  
使用客户端的时间  

`f_popType`  
弹出礼包的类型  

`haloId`    
战斗光环id

`imageId`  
形象id  

`flagId`  
战斗战旗id  

`taskId`  
当前完成的任务taskId  

`leadImageId`  
War3当前形象id  

`msiderbuy`  
设置购买组件的样式1或者2  

`disable_debug_draw=1`  
不显示DEBUG渲染对象  

`quickchannel`  
quick渠道1~8的配置  
Project1\Client\trunk\resource\quick\1~8.txt  

`dummyquick`  
quick网页测试模式  

`timeScale=10`  
10倍速  

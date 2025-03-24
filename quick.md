[链接配置](#链接配置)  
[说明](#说明)  

# 链接配置

`《猎人王0.1》发行&CP对接需求文档\以混服需求.txt`为例子做说明  

    ProductCode：21235891789817030328541177859562
    ProductKey：78527444
    Callback_Key：34341371600252329288740436701254
    Md5_Key：gsvqci1sm35jhsbdfr5psatdnfhuvqlb

只需要替换`ProductCode`和`ProductKey`的值,不同的渠道用不同的值  

正式母链  

{r}https://lr-cdn.youjiayouxi.cn/quick/bin/index.html?config=quick&ProductKey=78527444&ProductCode=21235891789817030328541177859562{!r}  

`https://lr-cdn.youjiayouxi.cn/quick/bin/index.html?config=quick&pk=78527444&pc=21235891789817030328541177859562`  

测试灰度服母链  

`https://cdnserver.game.wanhuir.com/cbsg/quick/bin/index.html?config=quick&ProductKey=78527444&ProductCode=21235891789817030328541177859562&ver=v1_gray`

`&ver=v1_gray`永久灰度服(用于测护用，正式服开服后，这个仍然是灰度服测试服)  

H5测试服  
`https://winserver.game.wanhuir.com/Project1/Client/ts_fengzhi57_seven/gameclient/bin/index.html?config=s_test&dummyquick=1&user=yourname`  

# 说明 
隐私协议用户协议更新和我们同步  

如果需要调试可以使用下面的母链(将pk和pc)  
{h}https://winserver.game.wanhuir.com/Project1/Client/ts_fengzhi57_seven/gameclient/bin/index.html?config=quick&pk=78527444&pc=21235891789817030328541177859562{!h}  

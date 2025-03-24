let gm = window['gm'];

// 获取道具  
gm('item 10001 1')  

// 解锁所有英雄  
gm('hero')  

// 局内道具获得  
gm('item_inner 6 1000;item_inner 7 1000')

// 添加1个heroid = 23的英雄  
gm('hero_inner 23 1')


gm("end")               // 强制结束战斗

gm('func_card')         // 解锁所有功能卡

gm('func_card 1 10')    // 给某个功能卡增加对应数量

gm('trophy 5999');      //设置英雄奖杯数
gm('trophy_max 0');     //设置英雄最高奖杯数量

gm('openui 56');        //战斗中的GM界面  
gm('closeui 56');       //关闭界面  
gm("finishguide");      //结束引导  
gm('openui 56 1-20')    //查看imageid=20的序列帧动画  
gm('openui 56 2-10')    //查看怪物序列帧动画 10代表t_Monster_Template  
gm('finish_pveguide')   //领取一次pve引导

gm('box 1 1')           //获取宝箱 位置 id

// 卡牌效果模拟
gm('card_inner 1')

// 打印配置表查看配置表  
gm('table t_Enemy_Wave');  

// 设置英雄到指定等级
gm('hero_level  英雄id  英雄等级')

// 设置最高奖杯
gm('trophy_max 最高奖杯数量')

// 设置道具到指定数量
gm('item_appoint 道具id 道具数量')

// 设置经验到指定值
gm('exp 数值')

// 增加经验(在当前基础上加)
gm('exp_add 数值')

// 跳转到第10波  
gm("wave 10")

// 断开网络  
gm("closesocket")  

// 灵宝  
gm("treasure")  

// 增加排位赛技能卡  卡id和添加的数量
gm('rankfunc_card 7002 30')

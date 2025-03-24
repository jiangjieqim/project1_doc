工具链目录 \Project1\Client\tools\qatools

工具链相关功能文档 Project1\Client\tools\qatools\read.md  

客户端工程 Project1\Client\trunk\gameclient

UI工程 Project1\Client\trunk\gameclient_ui  

前后端协议 Project1\Client\trunk\protos\\..

**相关计划**  
1 通讯协议结构说明  
 uint16 | uint32 | length |
 
  协议ID | 协议data段长度 |协议data段  |


2 相关准备工作  
* 计划概要  
  * 1.前后端联调完基础网络协议部分,服务器完成数据存储等相关基础功能。  
  
  * 2.推进业务功能迭代开发。\Project1\Client\trunk\protos\*.xml 协议实现策划功能需求。  
  
  * 3.配置字段，协议结构等设计 前后端根据业务需求协商设计。

* window 环境下部署一个服务器测试环境便于策划配表验证数据  
    SVN `https://edward/svn/Project/Project1/Server`
* 目前服务端配置导出的为JSON格式

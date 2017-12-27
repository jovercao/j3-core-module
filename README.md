# j3-core-module

> module模块主要实现模块化协议以及包依赖、包加载等相关需求。

每一个J3模块同时又是一个npm包。
在package.json中添加以下节

例： `package.json`

``` json
{
    "name": "j3-erp-store-base",
    "author": "jover",
    // ...
    // j3配置项
    "j3": {
        "id": "zeIfId3z3FdfNm23",  // 模块id
        "name": "store-base", // 模块名称
        "group": "ERP",      // 模块所属的组别
        "desc": "仓储模块",   // 模块说明
        // 依赖模块，此处均为j3模块。
        "deps": [
            "core",
            "goods-base",
            "emp-base",
            "sys-base",
            "usr-base",
            "right-base"
        ],
        // 关键！安装器定义，可定义多组操作，操作按顺序执行
        "installer": [{
            // @type 执行类型，instance - 进程内执行， shell - 控制台执行
            "type": "instance",
            // @handler 要执行的入口，定义约定：function init(app)
            "handler": "init"
        }, {
            // 定义一组命令，初始化范例数据。
            "type": "shell",
            // 初始化范例数据命令，将在shell中执行
            "command": "node create-demo-data.js"
        }],
        // 关键！卸载器定义，可定义多组操作，操作按顺序执行
        "uninstaller": [{
            "type": "internal",
            "handler": "uninstall"
        }, {
            "type": "command",
            "command": "node remove-demo-data.js"
        }]
    }
}
```

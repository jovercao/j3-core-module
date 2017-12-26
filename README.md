# j3-core-module

> module模块主要实现模块化协议以及包依赖、包加载等相关需求。

每一个J3模块同时又是一个npm包。
在package.json中添加以下节

例： `package.json`

``` json
{
    "j3": {
        "id": "zeIfId3z3FdfNm23",
        "name": "store-base",
        "group": "ERP",
        "desc": "仓储模块",
        "deps": [
            "core",
            "goods-base",
            "emp-base",
            "sys-base",
            "usr-base",
            "right-base"
        ],
        "installer": {
            "type": "internal",
            "handler": "init"
        },
        "uninstaller": {
            "type": "command",
            "command": "node uninsatall.js"
        }
    }
}
```

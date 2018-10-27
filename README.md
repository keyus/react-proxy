# 后台系统 前言

[README in English](README-en.md)

没啥前言，就架构一个比较像样一点儿的项目。由于项目中涉及大量的安全，及各种签名方式。所以并没有完全开源。


## 技术栈

react16.6 + react-router-4 + redux + react-redux + webpack + ES6/7 + axios + sass + flex

## 项目运行

#### 注意：由于涉及大量的 ES6/7,8 等新属性，node 需要 6.0 以上版本
#### 注意：由于使用最新的上下文api  contextType静态属性，react版本必须16.6及以上  路由使用的react-router 4分布式路由构建

# 安装
npm install    (yarn install)

# 运行
npm start      (yarn start)

# 测试账号(不同账号，不同权限)
admin   1
agent   1

# 目录结构
```
.

├── config                                       // create-react-app 反编译包
├── public                                       // index文件生成基准
├── script                                      // 脚本命令
├── src                                         // 源码目录
│   ├── api                                     // api http发送文件
│   ├── assets                                  // 项目公共组件
│   ├── components                              // 资源文件
│   ├── lib                                     // 项目依赖外部插件库
│   ├── page                                    // 路由页面
│   │   ├── 404                                 // 404页面
│   │   ├── dashboard                           // 用户登陆后访问的页面
│   │   │   ├── agent                           // 代理目录
│   │   │   ├── system                          // 系统管理
│   │   │   └── common                          // 公共访问页面
│   │   └── login                               // 登陆
│   ├── store                                   // edux状态管理仓库
│   ├── style                                   // 全局样式文件夹
│   └── util                                    // 工具函数及一些自行扩展插件
│   │   ├── config.js                           // 项目配置
│   │   ├── Gee.js                              // 极验认证插件
│   │   ├── history.js                          // router4 路由外部行为跳转支撑
│   │   ├── http.js                             // axios实例
│   │   ├── index.js                            // 工具函数文件
├── app.js                                         // 根组件
├── index.js                                        // 项目入口文件
├── index.js                                        // 项目入口文件
└── serviceWorker.js                                // pwa
.

56 directories, 203 files
```

# 关于eslint

如果有新增外部插件之类的JS文件，可能会过不了eslint检查，你可以在文件头部加上 /* eslint-disable */ 以跳过检查
参考src/lib/gt.js

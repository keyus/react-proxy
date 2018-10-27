#安装
npm install    (yarn install)

#运行
npm start      (yarn start)

#目录结构

config     --create-react-app 反编译包
public     --index文件生成基准
script     --脚本命令
src        --开发工程目录
    |api                --api http发送文件
    |assets             --资源文件
    |components         --项目公共组件
    |lib                --项目依赖外部插件库
    |page               --跑由页面
        |404                --404页面
        |dashboard              --用户登陆后访问的页面
            |agent              --代理
            |system             --系统管理
            |common             --公共访问页面
        |login              --登陆
    |store              --redux状态管理仓库
    |style              --全局样式文件夹
    |util               --工具函数及一些自行扩展插件
        config.js              --项目配置
        Gee.js                 --极验认证插件
        history.js             --router4 路由外部行为跳转支撑
        http                   --axios实例
        index.js               --工具函数文件

    app.js              --根组件
    index.js            --项目入口文件
    serviceWorker.js    --pwa文件依赖(忽略)

#关于eslint

如果有新增外部插件之类的JS文件，可能会过不了eslint检查，你可以在文件头部加上 /* eslint-disable */ 以跳过检查
参考src/lib/gt.js

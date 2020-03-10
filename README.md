# manage_backend

> 这是一个基于[React](https://reactjs.org)+[Eggjs](https://eggjs.org)的基础前后台管理项目。前台采用React视图框架，[Antd](https://ant.design/index-cn)为项目UI框架，[axios](https://github.com/axios/axios)负责前后台数据交互。后台采用阿里优秀[nodejs](https://nodejs.org)框架Eggjs。数据库利用的是[MongoDB](https://www.mongodb.com)。
>
> 这里是完整项目的接口后台部分，后台部分push在[另一个repository](https://github.com/Vinsurs/manage_front_react)。

### 项目构建

项目基于Egg官方脚手架 [egg-init](https://www.npmjs.com/package/egg-init).

### 运行项目

> 前提是先clone/fork 该项目，并安装moogodb数据库驱动。

1. 随便找一个文件夹作为数据库存储，然后启动数据库服务

```bash
$ mongod --dbpath=my_dbstore_path
```

2. 启动manage_backend后台服务

3. 你可以将这个[manage_front_react](https://github.com/Vinsurs/manage_front_react)前台项目clone/fork到你本地，checkout到master主分支（默认即为master分支），然后执行

```bash
$ cd manage_frontend_react
$ yarn
$ yarn start
# open http://localhost:3000
```

首先进入login page，输入以下管理员账号

```
accout:admin;         password:admin
```

登录成功进入主界面。





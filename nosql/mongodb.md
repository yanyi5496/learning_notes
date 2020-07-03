#### mongodb添加用户

```sql

db.createUser({user:'root',pwd:'root',roles:[{role:'readWrite',db:'apmanage'}]})

db.createUser({user:'writer',pwd:'admin123qwe',roles:[{role:'readWrite',db:'nlca_project_construct'}]})
```

####  安装mongo   ubuntu

```sql
apt-get install mongodb
mongo-version    查看版本
service mongodb start  启动
service mongodb stop   停止
systemctl status mongodb.service 查看运行状态

配置文件位于  /etc/mongodb.conf 
	去掉auth=true注释开启用户权限认证
	
db.auth("username","password")  登录
```



#### 卸载mongodb

```sql
apt-get purge mongodb  卸载 后面的名称根据具体版本更改
/etc/mongodb.conf  配置文件路径
/var/lib/mongo   安装路径

```



#### mongo  docker

+ 启动mongo 开启认证登录

```shell
docker run  --name mongodb -p 27018:27017  -v /mysoft/mongodb/configdb:/data/configdb/ -v /mysoft/mongodb/db/:/data/db/ -d 镜像名称/ID --auth      

```

+ 以admin身份进入mongo  会直接进入到mongo的shell

```shell
docker exec -it 容器名称/ID mongo admin
```

+ 创建一个admin管理员账号

```shell
db.createUser({ user: 'admin', pwd: 'admin123456', roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] });
```

- 对admin身份进行认证

```shell
use admin; 
db.auth("admin","admin123456");  此处使用上面设置的用户名和密码
```

- 创建一个数据库及添加用户

```sql
use web; 
db.createUser({ user: 'web', pwd: 'web123456', roles: [ { role: "readWrite", db: "web" } ] });
```

- 测试是否创建成功

```sql
use web;
db.auth("web","web123456");
```

- 开启远程

```shell
#进入容器
docker exec -it  mongodb  /bin/bash
#更新源 
apt-get update 
# 安装 
vim apt-get install vim 
# 修改 mongo 配置文件 
vim /etc/mongod.conf.orig
```


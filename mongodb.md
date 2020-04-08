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


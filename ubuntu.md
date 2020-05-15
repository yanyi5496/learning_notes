##### 内存回收

```bash
cat /proc/sys/vm/drop_caches  #查看缓存回收等级
echo 1 > /proc/sys/vm/drop_caches #表示清除pagecache。
echo 2 > /proc/sys/vm/drop_caches #表示清除回收slab分配器中的对象（包括目录项缓存和inode缓存）。slab分配器是内核中管理内存的一种机制，其中很多缓存数据实现都是用的pagecache。
echo 3 > /proc/sys/vm/drop_caches #表示清除pagecache和slab分配器中的缓存对象。
```

##### 软件下载安装编译

```bash
apt-cache search gcc  #搜索软件包
apt-get install gcc #安装软件包
apt-get purge gcc #卸载软件包
apt-get update #更新源
add-apt-repository ppa:仓库地址      #添加ppa
```

[什么是PPA？](https://linux.cn/article-10456-1.html)

##### 进程

```bash
ps -ef  #查看当前运行进程
ps -aux  #查看当前运行进程  可配合grep过滤
```

##### 文件

```bash
ls -a   #显示包括隐藏文件夹
ls -l   #以列表展示文件信息

```













































<p name='ppa'>1000-10000</p>


[toc]

# MVVM

 Model：bean(实体类)、Data Source（Http请求相关、数据库相关）
 		View：xml、View、Activity、Fragment 等UI相关
		 ViewModel：先简单理解为管理器

# AAC (Android Architecture Components)

Google官方推出的一个构建Android应用架构的库。它可以帮你避免在Android应用开发中常见的一些问题，比如：内存泄露，管理组件生命周期等等。

ViewModel 负责调用 Model（可以称之为数据源），拿到结果后，更新自身。而 View 与 ViewModel 双向绑定（后面会讲怎么实现绑定的），所以 View 就会自动更新。这就是 MVVM 大致的思想。

![img](https://raw.githubusercontent.com/yanyi5496/yanyi5496.github.io/image/markdown/5278680-6c4cdcfa06dda276.png)

-   Lifecycle
     生命周期管理，把原先Android生命周期的中的代码抽取出来，如将原先需要在onStart()等生命周期中执行的代码分离到Activity或者Fragment之外。

-   LiveData
     一个数据持有类，持有数据并且这个数据可以被观察被监听，和其他Observer不同的是，它是和Lifecycle是绑定的，在生命周期内使用有效，减少内存泄露和引用问题。

-   ViewModel
     用于实现架构中的ViewModel，同时是与Lifecycle绑定的，使用者无需担心生命周期。可以在多个Fragment之间共享数据，比如旋转屏幕后Activity会重新create，这时候使用ViewModel还是之前的数据，不需要再次请求网络数据。

-   Room
     谷歌推出的一个Sqlite ORM库，不过使用起来还不错，使用注解，极大简化数据库的操作，有点类似Retrofit的风格。


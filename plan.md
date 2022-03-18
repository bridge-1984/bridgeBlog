## 学习计划 
### 1. elementUI
### 2. mongoDB
### 3. webpack5、koa2
********

### 开发路线： 
前端界面 --> 后端接口 --> 后台管理界面 --> 部署上线

### 前端界面：vue + elementUI
**1. 安装并导入elementUI**

```npm i element-ui -S```  
> 在main.js中导入
```
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

**2. 页面规划**<br>
主要先做出3个页面<br>
顶部导航栏和尾部信息栏为各个页面均有  
前端为单页应用，内容的切换通过路由更换组件实现

2.1 首页<br>
按时间顺序展示文章<br>

2.2 文章分类页面<br>
展示所有文章，并可以通过点击标签显示不同类别的文章

2.3 文章详细页面



/*
 *  入口文件
 */
import Vue from 'vue'
import App from './src/app.vue'
import main from './src/index.less'

// 引入全局CSS样式

// 在body下创建一个根节点
const root = document.createElement('div');
document.body.appendChild(root);

// 将根节点root注入到app.vue组件中
new Vue({
    render: (h) => h(App)
}).$mount(root);
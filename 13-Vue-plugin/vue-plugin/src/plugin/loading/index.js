import Vue from 'vue'
import Loading from "./Loading.vue"

// 在Vue中注册一个组件：
// 1.在src目录下创建一个plugin文件夹，并创建插件文件夹，创建一个index.js文件
// 2.暴露一个对象，对象中返回一个install函数
// 3.在函数中全局注册这个组件
// 4.在main.js中引入这个文件
// 5.使用Vue.use()使用该组件

export default {
    install(Vue, options) {
        // Vue.component(Loading.name, Loading);
        // 1.根据我们的组件生成一个构造函数
        let LoadingConstructor = Vue.extend(Loading);
        // 2.根据构造函数创建一个实例对象
        let LoadingInstance = new LoadingConstructor();
        // 3.随便创建一个元素
        let oDiv = document.createElement("div");
        // 4.将创建好的标签添加到界面上
        document.body.appendChild(oDiv);
        // 5.将创建好的实例对象挂载到界面上
        LoadingInstance.$mount(oDiv);
        // console.log(options);
        // 从创建好的实例对象上可以拿到我们组件上的数据
        // console.log(LoadingInstance.title);
        if (options && options.title !== null && options.title !== undefined) {
            LoadingInstance.title = options.title;
        }
        // 添加全局方法
        Vue.showLoading = function () {
            LoadingInstance.isShow = true;
        }
        Vue.hiddenLoading = function () {
            LoadingInstance.isShow = false;
        }
        // 添加实例方法
        Vue.prototype.$showLoading = function () {
            LoadingInstance.isShow = true;
        }
        Vue.prototype.$hiddenLoading = function () {
            LoadingInstance.isShow = false;
        }
    }
}
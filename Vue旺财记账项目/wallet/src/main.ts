import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import tagListModel from '@/models/tagListModel';
import recordListModel from './models/recordListModel'
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
Vue.config.productionTip = false

// record store
window.recordList = recordListModel.fetch();
window.createRecord = (record:RecordItem) => recordListModel.create(record);
// tag store
window.tagList = tagListModel.fetch();
window.createTag = (name:string) => {
  const message = tagListModel.create(name);
  if(message === 'duplicated') {
      alert('标签重复');
  }else if(message === 'success') {
      alert('添加成功');
  }
}
window.removeTag = (id: string) => {
  return tagListModel.remove(id); 
}
window.updateTag = (id:string,name:string) => {
  return tagListModel.update(id,name);
}
window.fingTag = (id:string) => {
  return window.tagList.filter(t => t.id === id)[0];
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

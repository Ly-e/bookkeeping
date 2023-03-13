import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import NavBar from '@/components/NavBar.vue'
import PageLayout from '@/components/PageLayout.vue'
import IconComponent from '@/components/IconComponent.vue'
import tagListModel from './models/tagListModel'
import recordListModel from './models/recordListModel'

Vue.config.productionTip = false

Vue.component('NavBar', NavBar)
Vue.component('PageLayout', PageLayout)
Vue.component('Icon', IconComponent)

//record store
window.recordList = recordListModel.fetch();
window.createRecord = (record: RecordItem) =>
  recordListModel.create(record);
//tag store
window.createTag = (name: string, icon: string) => {
  if (name && icon) {
    const message = tagListModel.create(name, icon);
    if (message === "duplicated") {
      window.alert("标签名重复了，请重新输入！");
      return 'duplicated'
    } else if (message === "success") {
      window.alert("添加成功！");
      return 'success';
    }
  } else if (!name) {
    window.alert("请输入标签名！");
  } else if (icon === "" || icon === null || icon === undefined) {
    window.alert("请选择标签图标！");
  }
}
window.removeTag = (id: string) => {
  return tagListModel.remove(id)
}
window.updateTag = (id: string, name: string, icon: string) => {
  if (name && icon) {
    const message = tagListModel.update(id, name, icon);
    if (message === "success") {
      window.alert("保存成功");
      return 'success';
    } else if (message === "duplicated") {
      window.alert("标签名重复了，请重新输入！");
      return 'duplicated';
    } else if (message === "not found") {
      window.alert("编辑的标签不存在！");
      return 'not found';
    }
  }
}
window.findTag = (id: string, tag: TagItem[]) => {
  return tag.filter((t) => t.id === id)[0];
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

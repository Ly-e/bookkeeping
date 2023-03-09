import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import NavBar from '@/components/NavBar.vue'
import PageLayout from '@/components/PageLayout.vue'
import IconComponent from '@/components/IconComponent.vue'
import tagListModel from './models/tagListModel'

Vue.config.productionTip = false

Vue.component('NavBar', NavBar)
Vue.component('PageLayout', PageLayout)
Vue.component('Icon', IconComponent)

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

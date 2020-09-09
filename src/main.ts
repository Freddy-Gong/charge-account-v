import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import tagModel from './models/tagListModels'
import model from './models/model'
Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)

//record store
window.recordList = model.fetch()
window.createRecord = (record: RecordItem) => model.create(record)
//tag store
window.tagList = tagModel.fetch()
window.find = (id: string) => {
  return window.tagList.filter((t) => t.id === id)[0]
}
window.createTag = (name: string) => {
  if (name) {
    try {
      tagModel.create(name);
      window.alert("chenggonog");
    } catch (error) {
      if (error.message === "duplicated") {
        window.alert("标签重复");
      }
    }
  }
}
window.removeTag = (id: string) => {
  if (tagModel.delete(id)) {
    return true
  } else {
    return false
  }
}
window.updateTag = (id: string, name: string) => {
  return tagModel.update(id, name);

}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

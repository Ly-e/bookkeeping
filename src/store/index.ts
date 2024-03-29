import clone from '@/lib/clone'
import createId from '@/lib/createID'
import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    message: '',
    currentTag: undefined
  } as RootState,
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem('recordList') || "[]"
      ) as RecordItem[];
    },
    createRecord(state, record: RecordItem) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date().toISOString();
      state.recordList.push(record2);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem(
        'recordList',
        JSON.stringify(state.recordList)
      );
    },

    setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter((t) => t.id === id)[0];
    },

    fetchTags(state) {
      state.tagList = JSON.parse(
        window.localStorage.getItem('tagList') || "[]");
      if (state.tagList.length === 0 || !state.tagList) {
        store.commit('createTag', { name: '其他', icon: 'others' });
        store.commit('createTag', { name: '购物消费', icon: 'shopping' });
        store.commit('createTag', { name: '美食餐饮', icon: 'food' });
        store.commit('createTag', { name: '休闲娱乐', icon: 'entertainment' });
        store.commit('createTag', { name: '医疗服务', icon: 'medicalSupplies' });
        store.commit('createTag', { name: '购物消费', icon: 'shopping' });
      }
    },
    createTag(state, payload: { name: string, icon: string }) {
      const { name, icon } = payload;
      if (name && icon) {
        const id = createId().toString();
        const x: TagItem = {
          id: id,
          name: name,
          icon: icon,
        }
        const nameInData = state.tagList.map(value => value.name);
        const nameInDataSet = [...new Set(nameInData)];
        if (nameInDataSet.indexOf(x.name) >= 0) {
          state.message = 'duplicated';
        } else {
          state.tagList.push(x);
          store.commit('saveTags');
          state.message = 'success'
          router.back();
        }
      } else if (!name) {
        state.message = 'no name'
      } else if (icon === "" || icon === null || icon === undefined) {
        state.message = 'no icon'
      }
    },
    saveTags(state) {
      window.localStorage.setItem(
        'tagList',
        JSON.stringify(state.tagList)
      );
    },
    updateTag(state, payload: { id: string, name: string, icon: string }) {
      const { id, name, icon } = payload
      if (name) {
        const idList = state.tagList.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
          const names = state.tagList.map(item => item.name);
          const tag = state.tagList.filter(item => item.id === id)[0];
          if (names.indexOf(name) >= 0 && tag.name !== name) {
            window.alert("标签名重复了，请重新输入！");
          } else {
            tag.name = name;
            tag.icon = icon;
            store.commit('saveTags');
            window.alert("保存成功");
            router.back();
          }
        } else {
          window.alert("编辑的标签不存在！");
        }
      }
    },
    removeTag(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      if (index >= 0) {
        state.tagList.splice(index, 1);
        store.commit('saveTags');
        window.alert("删除成功");
        router.back();
      } else {
        window.alert('删除失败')
      }
    },
  },
  actions: {
  },
  modules: {
  }
})

export default store

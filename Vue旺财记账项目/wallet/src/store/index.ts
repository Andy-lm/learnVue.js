import clone from '@/lib/clone';
import createId from '@/lib/createId';
import router from '@/router';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList:[],
    currentTag: undefined,
    createRecordError:null
  } as RootState,
  mutations: {
    saveRecords(state) {
      window.localStorage.setItem('recordList',JSON.stringify(state.recordList));
    },
    fetchRecords(state) { 
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state,record:RecordItem) {
      let cloneRecord = clone(record);
      cloneRecord.createdAt = new Date().toISOString();
      state.recordList.push(cloneRecord);
      store.commit('saveRecords');
    },
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
      if (!state.tagList || state.tagList.length === 0) {
        store.commit('createTag', '衣');
        store.commit('createTag', '食');
        store.commit('createTag', '住');
        store.commit('createTag', '行');
      }
    },
    createTag(state,name) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复了');
      }
      const id = createId().toString();
      state.tagList.push({id, name: name});
      store.commit('saveTags');
      window.alert('添加成功');
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    setCurrentTag(state,id:string) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0];
    },
    updateTag(state, payload: { id: string, name: string }) {
      const { id, name } = payload;
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          window.alert('标签名重复了');
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTags');
        }
      }
    },
    removeTag(state,id:string) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      if (index >= -1) {
        state.tagList.splice(index, 1);
        store.commit('saveTags');
        router.back();
      } else {
        alert('删除失败');
      }
    }
  },
})
export default store

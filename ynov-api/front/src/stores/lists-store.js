import { defineStore } from 'pinia'
import { getAllLists, createList, deleteList } from 'src/services/lists'

export const useListStore = defineStore('list', {
  state: () => ({
    list: {}
  }),
  getters: {
  },
  actions: {
    async getLists (token) {
      try {
        const res = await getAllLists()
        this.list = res
      } catch (e) {
        throw new Error(e)
      }
    },
    async createList (params) {
      try {
        const res = await createList(params)
        this.list.push(res)
      } catch (e) {
        throw new Error(e)
      }
    },
    async deleteList (id) {
      try {
        await deleteList(id)
        this.getLists()
      } catch (e) {
        throw new Error(e)
      }
    }
  }
})

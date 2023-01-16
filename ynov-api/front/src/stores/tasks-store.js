import { defineStore } from 'pinia'
import { getAllTasks, createTask } from 'src/services/Tasks'

export const useTaskStore = defineStore('task', {
  state: () => ({
    task: {}
  }),
  getters: {
  },
  actions: {
    async getAllTasks () {
      try {
        const res = await getAllTasks()
        this.list = res
      } catch (e) {
        throw new Error(e)
      }
    },
    async createTask (params) {
      try {
        await createTask(params)
        this.getAllTasks()
      } catch (e) {
        throw new Error(e)
      }
    }

  }
})

import { api } from 'boot/axios'

export const getAllTasks = async () => {
  try {
    const response = await api.get('/tasks')
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const createTask = async (params) => {
  try {
    const response = await api.post('/tasks', params)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

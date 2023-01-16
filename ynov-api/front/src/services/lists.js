import { api } from 'boot/axios'

export const getAllLists = async () => {
  try {
    const response = await api.get('/lists')
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const createList = async (params) => {
  try {
    const response = await api.post('/lists', params)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}
// export const deleteList = async (params) => {
//   try {
//     const response = await api.post('/lists', params)
//     return response.data
//   } catch (error) {
//     console.log(error)
//     throw error
//   }
// }

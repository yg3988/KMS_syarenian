import axios from "axios"

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export const insertUser = payload => api.post(`/user`, payload);

const apis = {
  insertUser,
}

export default apis
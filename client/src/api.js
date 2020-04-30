import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const getUsers = () => api.get(`/users`)
export const getThemeById = id => api.get(`/theme/${id}`)
export const getUserById = id => api.get(`/user/${id}`)

const apis = {
    getUsers,
    getUserById,
    getThemeById
}

export default apis
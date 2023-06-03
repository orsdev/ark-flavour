import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  headers: {
    "x-api-key": import.meta.env?.VITE_SPOONACULAR_KEY
  },
  timeout: 50000, // 50 seconds
})

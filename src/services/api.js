import axios from 'axios'
// import { setupCache } from 'axios-cache-adapter'

// const cache = setupCache({
//   maxAge: 200,
//   debug: false,
//   exclude: {
//     query: true
//   }
// })

console.log(process.env.VUE_APP_URL)

export const API = axios.create({
  baseURL: process.env.VUE_APP_URL,
  // adapter: cache.adapter
})


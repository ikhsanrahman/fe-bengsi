import { API } from '@/services/api'
// import axios from 'axios'


export default {
  registerArticle (payload) {
    // let data = payload
    // return API.post(`/api/v1/article`, data, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    return API.post(`/api/v1/article`, payload)
    // return API.get(`/api/v1/article`)
  },
  updateArticle (payload) {
    let data = payload
    return API.patch(`/api/v1/article/${data.article_uuid}/update`, data )
  },
  listArticle () {
    return API.get('/api/v1/article')
  }
}
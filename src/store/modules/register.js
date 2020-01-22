import RegisterService from '@/services/register'

// state
export const state = {
  allArticle : []
}

// getters
export const getters = {
  articleList: (state) => {
    return state.allArticle
  }
}

// actions
export const actions = {
  async list_article ({commit}) {
    return new Promise((resolve, reject) => {
      RegisterService
        .listArticle()
        .then(({data}) => {
          if (data) {
            commit('LIST_ARTICLE', data)
            resolve(data.payload)
          }
          reject(data)
        })
        .catch((response)=> {
          reject(response)
        })
    })
  },
  async register_article ({commit}, payload) {
    return new Promise((resolve, reject) => {
      RegisterService
        .registerArticle(payload)
        .then(({data}) => {
          if (data) {
            console.log(data, 'get')
            resolve(data.payload)
          }
          reject(data)
        })
        .catch((response)=> {
          console.log(response)
          reject(response)
        })
    })
  },
  async update_article ({commit},payload) {
    return new Promise((resolve, reject) => {
      RegisterService
        .updateArticle(payload)
        .then(({data}) => {
          if (data) {
            resolve(data.payload)
          }
          reject(data)
        })
        .catch((response)=> {
          reject(response)
        })
    })
  },


}

// mutations
export const mutations = {
  LIST_ARTICLE (state, data) {
    state.allArticle = data
  }

}

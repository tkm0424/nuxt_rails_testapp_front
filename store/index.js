const homePath = 'projects'

// stateは共通の変数をおく場所(Vueファイルのdata)
export const state = () => ({
  styles: {
    homeAppBarHeight: 56
  },

  loggedIn: {
    homePath: {
      name: homePath
    }
  },
  project: {
    current: null,
    list: []
  },
  user: {
    current: null
  },
  auth: {
    token: null,
    expires: 0,
    payload: {}
  }

})

// 産出プロパティ(Vueファイルでいうcomputed)
export const getters = {}

// stateの値を変更する場所
export const mutations = {
  setProjectList (state, payload) {
    state.project.list = payload
  },
  setCurrentProject (state, payload) {
    state.project.current = payload
  },
  setCurrentUser (state, payload) {
    state.user.current = payload
  },
  setAuthToken (state, payload) {
    state.auth.token = payload
  },
  setAuthExpires (state, payload) {
    state.auth.expires = payload
  },
  setAuthPayload (state, payload) {
    state.auth.payload = payload
  }
}

// メソッド(Vueファイルでいうmethods
export const actions = {
  getProjectList ({ commit }, projects) {
    projects = projects || []
    commit('setProjectList', projects)
  },
  getCurrentProject ({ state, commit }, params) {
    let currentProject
    if (params && params.id) {
      const id = Number(params.id)
      currentProject = state.project.list.find(project => project.id === id) || null
    }
    commit('setCurrentProject', currentProject)
  },
  getCurrentUser ({ commit }, user) {
    commit('setCurrentUser', user)
  },
  getAuthToken ({ commit }, token) {
    commit('setAuthToken', token)
  },
  getAuthExpires ({ commit }, expires) {
    expires = expires || 0
    commit('setAuthExpires', expires)
  },
  getAuthPayload ({ commit }, jwtPayload) {
    jwtPayload = jwtPayload || {}
    commit('setAuthPayload', jwtPayload)
  }
}

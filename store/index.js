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
    list: [
      { id: 1, name: 'MyProject01', updatedAt: '2020-04-01T12:00:00+09:00' },
      { id: 2, name: 'MyProject02', updatedAt: '2020-04-05T12:00:00+09:00' },
      { id: 3, name: 'MyProject03', updatedAt: '2020-04-03T12:00:00+09:00' },
      { id: 4, name: 'MyProject04', updatedAt: '2020-04-04T12:00:00+09:00' },
      { id: 5, name: 'MyProject05', updatedAt: '2020-04-01T12:00:00+09:00' }
    ]
  }

})

// 産出プロパティ(Vueファイルでいうcomputed)
export const getters = {}

// stateの値を変更する場所
export const mutations = {
  setCurrentProject (state, payload) {
    state.project.current = payload
  }
}

// メソッド(Vueファイルでいうmethods
export const actions = {
  getCurrentProject ({ state, commit }, params) {
    const id = Number(params.id)
    const currentProject =
      state.project.list.find(project => project.id === id) || null
    commit('setCurrentProject', currentProject)
  }
}

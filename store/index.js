const redirectPath = 'projects'

// stateは共通の変数をおく場所(Vueファイルのdata)
export const state = () => ({
  styles: {
    homeAppBarHeight: 56
  },

  loggedIn: {
    redirectPath: {
      name: redirectPath
    }
  }

})

// 産出プロパティ(Vueファイルでいうcomputed)
export const getters = {}

// stateの値を変更する場所
export const mutations = {}

// メソッド(Vueファイルでいうmethods
export const actions = {}

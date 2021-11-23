class MyInject {
  constructor (ctx) {
    this.app = ctx.app
  }

  // i18n変換用メソッド
  pageTitle (routeName) {
    const jsonPath = `pages.${routeName.replace(/-/g, '.')}`
    const title = this.app.i18n.t(jsonPath)
    return title
  }
}

// inject => オリジナルクラスを追加できる(アプリ全体で使うメソッドの管理で使うことが多い)
export default ({ app }, inject) => {
  inject('my', new MyInject({ app }))
}

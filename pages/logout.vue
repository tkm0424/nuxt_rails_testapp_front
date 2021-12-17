<script>

export default {
  // middleware => ページをレンダリングする前に実行される
  // nuxtServerInitの後に実行される(ライフサイクルの2番目なのでtemplateタグは必要にならない(beforeCreate内などだとtemplateがないエラーが出る))
  async middleware ({ $auth, redirect }) {
    await $auth.logout()
    return redirect('/')
  }
}
</script>

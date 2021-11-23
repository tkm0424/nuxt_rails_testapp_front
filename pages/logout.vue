<script>

export default {
  // middleware => ページをレンダリングする前に実行される
  // nuxtServerInitの後に実行される(ライフサイクルの2番目なのでtemplateタグは必要にならない(beforeCreate内などだとtemplateがないエラーが出る))
  middleware ({ redirect }) {
    return redirect('/')
  }
}
</script>

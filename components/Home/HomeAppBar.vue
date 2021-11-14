<template>
  <v-app-bar
    app
    :dark="!isScrollPoint"
    :height="homeAppBarHeight"
    :color="toolbarStyle.color"
    :elevation="toolbarStyle.elevation"
  >

    <app-logo
      @click.native="$vuetify.goTo('#scroll-top')"
    />
    <v-toolbar-title>
      {{ appName }}
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items
    class="ml-2"
    >
      <v-btn
        v-for="(menu, i) in menus"
        :key="`menu-btn-${i}`"
        text
        @click="goTo(menu.title)"
      >
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => []
    },

    imgHeight: {
      type: Number,
      default: 0
    }
  },

  data ({ $config: { appName }, $store }) {
    return {
      appName,
      scrollY: 0,
      homeAppBarHeight: $store.state.styles.homeAppBarHeight
    }
  },

  computed: {
    // 500-56 =444px超えている場合、true
    isScrollPoint () {
      return this.scrollY > (this.imgHeight - this.homeAppBarHeight)
    },
    toolbarStyle () {
      const color = this.isScrollPoint ? 'white' : 'transparent'
      const elevation = this.isScrollPoint ? 4 : 0
      return { color, elevation }
    }
  },

  // Vue.new() = Vueインスタンス
  // マウント => Vueの実行順部が完全に整った後にmountedメソッドが実行される
  mounted () {
    // window.addEventListenerはJSのメソッドで 'scroll'イベントを追加して、scrollを実行した時に this.onscrollというメソッドを呼び出している
    window.addEventListener('scroll', this.onScroll)
  },
  // Vueインスタンスが破壊される前に実行される(addEventListenerで追加されたイベントを破棄する)
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      // window.scrollY JSの現在のスクロールを取得できるメソッド
      this.scrollY = window.scrollY
    },
    goTo (id) {
      this.$vuetify.goTo(`#${id}`)
    }
  }
}
</script>

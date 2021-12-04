<template>
  <v-app>
    <!-- toolbar -->
    <logged-in-app-bar>
      <template
        v-slot:navigation-toggle-button
        clipped-left
      >
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
        />
      </template>
    </logged-in-app-bar>

    <!-- navigartionDrawer -->
    <project-navigation-drawer
      :drawer.sync="drawer"
    />

    <!-- main content -->
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware: 'get-project-current',
  data () {
    return {
      drawer: null
    }
  }
}
</script>

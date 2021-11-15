<template>
  <div>
    <v-toolbar-title>
      {{ appName }}
    </v-toolbar-title>
  </div>
</template>

<script>
export default {
  data ({ $config: { appName } }) {
    return {
      appName
    }
  }
}
</script>

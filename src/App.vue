<template>
  <v-app>
    <AppHeader></AppHeader>

    <v-content>
      <router-view/>
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

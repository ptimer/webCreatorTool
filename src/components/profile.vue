<template>
	<v-tabs
    centered
    dark
    icons-and-text
  >
    <v-tabs-slider color="yellow"></v-tabs-slider>

    <v-tab href="#tab-1">
      Информация
      <v-icon>account_circle</v-icon>
    </v-tab>

    <v-tab href="#tab-3">
      Сообщения
      <v-icon>message</v-icon>
    </v-tab>

    <v-tab href="#tab-2">
      Настройки
      <v-icon>settings</v-icon>
    </v-tab>

    <v-tab-item
      v-for="i in 3"
      :key="i"
      :value="'tab-' + i"
    >
      <v-card flat>
        <v-card-text>{{ text }}</v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {

  name: 'profile',

  data () {
    return {
    	text: "Владимир Сергеевич 1997"
    }
  }
}
</script>

<style lang="css" scoped>
</style>
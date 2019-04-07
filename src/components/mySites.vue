

<template>
  <div>
    <createNewWebsiteForm></createNewWebsiteForm>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div> {{ card_text }} </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Поделиться</v-btn>
            <v-btn flat color="orange">Редактировать</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import createNewWebsiteForm from './mySitesComponents/createNewWebsiteForm'

export default {

  name: 'mySites',

  components: {
    createNewWebsiteForm
  },

  data () {
    return {
    	card_text: "fgfgfgfgfgfgfgfg"
    }
  },
  methods:{
  }
}
</script>

<style lang="css" scoped>

</style>
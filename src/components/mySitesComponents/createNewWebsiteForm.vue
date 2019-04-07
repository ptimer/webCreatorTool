<template>
	<v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
    	<template v-slot:activator="{ on }">
	      <v-tooltip left open-delay="50">
	        <template v-slot:activator="{ on }">
	          <v-btn fab dark color="indigo" class="toOffset">
	            <v-icon dark v-on="on" @click="dialog = true">add</v-icon>
	          </v-btn>
	        </template>
	        <span class="toOffset">Создать новый сайт</span>
	       </v-tooltip>
	    </template>
      <v-card>
        <v-card-title>
          <span class="headline">Создать новый сайт</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Название сайта*" v-model="webSiteName" required></v-text-field>
              </v-flex>
              <v-flex xs12>
	            <v-textarea
	              v-model="description"
	              color="teal"
	            >
	              <template v-slot:label>
	                <div>
	                  Описание
	                </div>
	              </template>
	            </v-textarea>
	          </v-flex>
              <v-flex xs12>
                <v-select
                  :items="['Light blog', 'Dark blog', 'Light shop', 'Dark shop']"
                  label="Готовые шаблоны (необязательно)"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Закрыть</v-btn>
          <v-btn :disabled="notValid()" color="blue darken-1" flat @click="dialog = false; createNewWebSite()">Создать</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>

import firebase from "firebase/app"
import "firebase/database"

export default {

  name: 'createNewWebsiteForm',

  data () {
    return {
    	dialog: false,
    	webSiteName: null,
    	description: null
    }
  },

  computed:{
  },

  methods: {
  	notValid(){
  		if(this.webSiteName != null && this.description != null){
  			return false;
  		}else{
  			return true;
  		}
  	},

    createNewWebSite(){
      firebase.database().ref("mySites").set({name: this.webSiteName, descr: this.description, user_id: this.$store.getters.user_uid});
    }
  }
}
</script>

<style lang="css" scoped>
	.toOffset{
		margin: 30px 0;
	}
</style>
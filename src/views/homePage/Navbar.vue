<template>
    <v-app-bar
      app
      color="primary"
      dark>
      <div class="d-flex align-center ml-12">
        <h1 style="font-size:200%" @click="home" class="back d-none d-lg-block">Bengkel <span class="green--text text--darken-4">Publikasi</span></h1>
        <h1 class="d-lg-none back" @click="home" style="font-size:150%">Bengkel <span class="green--text text--darken-4">Publikasi</span></h1>        
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuectify-logo-dark.png"
          transition="scale-transition"
          width="40"/> -->

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"/> -->
      </div>

      <v-spacer></v-spacer>

      <v-btn
        @click="home"
        target="_blank"
        text>
        <span class="mr-2">Home</span>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            target="_blank"
            text
            v-on="on"
          >
            Layanan Kami
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-list-item-title class="menuService" @click="navigate(item.click)">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
        href=""
        target="_blank"
        text>
        <span class="mr-2">Event</span>
      </v-btn>

      <v-btn
        href=""
        target="_blank"
        text>
        <span class="mr-2">Kerja sama</span>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            target="_blank"
            text
            v-on="on">
            Materi
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in materi"
            :key="index">
            <v-list-item-title class="menuService" @click="item.click">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- <v-btn
        href=""
        target="_blank"
        text>
        <span class="mr-2">Informasi</span>
      </v-btn> -->

      <v-btn
        href=""
        target="_blank"
        text>
        <span class="mr-2">Hubungi kami</span>
      </v-btn>
    </v-app-bar>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Editing Mayor',
            click: 'editmayor' },
          { title: 'Editing Minor',
            click: 'editminor' },
          { title: 'Daftar Biaya',
            click: 'daftarbiaya' },
          { title: 'Publikasi Artikel',
            click: 'publikasiartikel' },
        ],
        materi:[
          { title: 'Daftar Jurnal',
            click: 'daftarjurnal' },
          { title: 'Kumpulan Materi',
            click: 'kumpulanmateri' },
          { title: 'Standar Mutu',
            click: 'standarmutur' },
        ]
      }
    },
    methods: {
      navigate (click) {
        if (click == "editmayor") {
          this.$router.push({name:'editmayor'})
        }
        if (click == "editminor") {
          this.$router.push({name:'editminor'})
        }
        if (click == "daftarbiaya") {
          this.$router.push({name:'daftarbiaya'})
        }
        if (click == "publikasiartikel") {
          this.$router.push({name:'publikasiartikel'})
        }
        if (click == "daftarjurnal") {
          this.$router.push({name:'daftarjurnal'})
        }
        if (click == "kumpulanmateri") {
          this.$router.push({name:'kumpulanmateri'})
        }
        if (click == "standarmutu") {
          this.$router.push({name:'standarmutu'})
        }

      },
      home () {
        this.$router.push({name:'home'})
        
    }
      }
  }
</script>

<style scoped>
  .back {
    cursor: pointer;
  }
  .menuService {
    cursor: pointer;
  }
</style>
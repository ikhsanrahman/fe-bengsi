<template>
  <v-container fluid>
    <v-row>
      <navbar></navbar> 
    </v-row>
    <v-row no-gutters justify="center" class="my-10">
      <v-col lg="6" class="text-center">
        <h1>Editing Minor</h1>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center" class="my-10">
      <v-col lg="5" class="text-center">
        <p class="text-justify">
          Layanan ini berupa proses perbaikan minor dan penyesuaian susunan artikel dengan format penerbit. Anda dapat berkonsultasi terlebih dahulu penerbit yang cocok dengan karya tulis Anda disini. Biaya layanan Editing mayor adalah sebesar Rp. 500.000 per 1000 kata. 
        </p>
        <p class="text-left" v-for="(item, index) in list" :key="index">
          <i class="far fa-circle"></i> <strong> {{item.text}}</strong>
        </p>
      </v-col>
    </v-row>
    <v-row>
      <contact/>
    </v-row>
  </v-container>
  
</template>

<script>
  import Navbar from '@/views/homePage/Navbar.vue'
  import Contact from '@/views/homePage/contact.vue'
  export default {
    name: "EditMayor",
    components: {
      Navbar,
      Contact
    },
    data () {
      return {
        list: [
          {text: "Layouting format penulisan sesuai jurnal preferensi"},
          {text: "Perbaikan kualitas grafis"},
          {text: "Pemeriksaan indeks plagiarisme (similarity index)"},
          {text: "Proof reading"}
        ]
      }
    }

  }
</script>
<style scoped>
	p {
		line-height: 2.5;
	}
</style>
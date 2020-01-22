<template>
  <v-container fluid>
    <v-row>
      <navbar></navbar> 
    </v-row>
    <v-row no-gutters justify="center" class="my-10">
      <v-col lg="6" class="text-center">
        <h1>Editing Mayor</h1>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center" class="my-10">
      <v-col lg="5" class="text-center">
        <p class="text-justify">
          Bila artikel Anda telah memenuhi kriteria minimum (cek disini) untuk laik publikasi dalam bahasa Indonesia, namun susunan atau format penulisan belum sesuai, kualitas grafis yang rendah dan sumber referensi yang lemah, Anda kami sarankan memilih layanan ini. Layanan Editing mayor mencakup penyesuaian format penulisan, perbaikan kualitas grafis, penguatan referensi, pengecekan indeks plagiarisme (similarity), alih bahasa inggris (bila memilih publikasi pada jurnal Internasional) dan proof reading (bila memilih publikasi pada jurnal Internasional). Biaya layanan Editing mayor adalah sebesar Rp. 1.000.000 per 1000 kata. Daftar Biaya selengkapnya
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
          {text: "Penguatan sumber rujukan (referensi)"},
          {text: "Pemeriksaan indeks plagiarisme (similarity index)"},
          {text: "Perbaikan dan/atau terjemahan bahasa inggris"},
          {text: "Proof reading"}
        ]
      }
    }

  }
</script>

<style scoped>
  p {
    line-height: 2;
  }
</style>
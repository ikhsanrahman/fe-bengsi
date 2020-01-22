<template>
  <v-container fluid>
    <v-row>
      <navbar></navbar> 
    </v-row>
    <v-row no-gutters justify="center" class="my-10">
      <v-col lg="6" class="text-center">
        <h1>Daftar Biaya</h1>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center" class="my-10">
      <v-col lg="5" class="text-center">
        <p class="text-left" v-for="(item, index) in list" :key="index">
          <i class="far fa-circle"></i> <strong> {{item.text}}</strong>
        </p>
        <p class="text-left">
          *semua layanan tidak termasuk biaya publikasi yang dibebankan kepada penulis atau dikenal dengan article processing charge (APC). APC tiap jurnal berbeda-beda bergantung jenis publikasinya, informasi mengenai APC tersebut akan kami komunikasikan dengan penulis sesuai permintaan. Daftar jurnal dapat dilihat disini
        </p>
        <p class="text-left">
          **termasuk layanan editing
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
          {text: "Editing Minor : Rp. 500.000 per 1000 kata"},
          {text: "Editing Mayor : Rp. 1.000.000 per 1000 kata"},
          {text: "Publikasi Jurnal Nasional terakreditasi (S2-S4)*: Rp. 500.000-1.000.000"},
          {text: "Publikasi Jurnal Internasional: Rp. 800.000"},
          {text: "Publikasi Jurnal Internasional terindeks Scopus/Web of Science/Sinta 1: Rp. 1.200.000"},
          {text: "Paket publikasi jurnal Nasional Terakreditasi (S2-S4)**: Rp. 2.000.00-4.000.000"},
          {text: "Paket publikasi jurnal Internasional/Internasional bereputasi** : Rp. 2.500.00-6.000.000 "},
          {text: "Publikasi konferensi Nasional**: Rp. 750.000-1.500.000"},
          {text: "Publikasi konferensi Internasional**: Rp. 2.000.000-4.000.000"},
          {text: "Workshop penulisan Jurnal : Rp. 350.000 per pax"},
          {text: "Paket publikasi artikel dari laporan/data mentah: Mulai dari Rp. 4.000.000"}


        ]
      }
    }

  }
</script>
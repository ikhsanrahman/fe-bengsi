<template>
    <div class="bg">
      <v-container fluid>
        <v-row no-gutters justify="center" class="mt-12 mb-12">
          <v-col lg="4">
            <h1 style="font-size:40px" class="text-center">Butuh Pendampingan Publikasi?</h1>
            <br>
            <p class="text-justify" style="font-size:120%">
              <strong>Bengkel Publikasi</strong> merupakan layanan untuk pendampingan publikasi di jurnal internasional bereputasi (terindex Scopus). Kami telah berhasil membantu para akademis, peneliti, mahasiswa untuk menerbitkan jurnal dan menfasilitasi proses pendampingan yang menjunjung tinggi etika akademik. Kami mengawal proses publikasi sampai berhasil (Accepted)
            </p>
            <br>
            <h2 class="d-flex justify-center text-justify" style="color:blue">Publikasi Segera Artikel Anda Bersama Kami !!!</h2>
          </v-col>
        </v-row>
        <v-row no-gutters justify="center" class="mt-12 mb-12">
          <v-col lg="2" class="d-flex justify-center">
            <v-btn color="primary" @click="daftar">
              Daftar disini !!
            </v-btn>
          </v-col>
          <!-- <v-col lg="2" class="d-flex justify-center">
            <v-btn color="primary">
              More
            </v-btn>
          </v-col>
 -->        </v-row>
        <dialogdaftar :dialog.sync=dialog></dialogdaftar>
      </v-container>
      
    </div>
</template>


<script>
  import DialogDaftar from '@/components/dialogs/DialogDaftar.vue'
  export default {
    components: {
      'dialogdaftar':DialogDaftar
    },
    data () {
      return {
        dialog: false,      }
    },
    methods: {
      daftar () {
        this.dialog = true
      }
    }
  }
</script>



<style scoped>
  .bg {
    background: url('../../assets/bg.png') no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    width: 100%;
    height: auto;
  }
  p {
    line-height: 2.5;
  }
  
</style>


<template>
  <v-container fluid class="blue lighten-5">
    <v-row justify="center" class="blue darken-3 mt-n3">
      <p class="black--text text-uppercase">bengkel publikasi untuk kemajuan penelitian dan pengembangan teknologi
      </p>
    </v-row>
    <br>
    <v-row no-gutters justify="center">
      <h1>Kenapa Bengkel Publikasi?</h1>
    </v-row>
    <br>
    <v-row no-gutters justify="center">
      <v-col lg='5' class="text-center mx-12" v-for="(item, index) in service" :key="index">
        <!-- <h2>{{item.title}}</h2> -->
        <br>
        <img :src="item.img" style="width:35%;" alt="">
        <br>
        <br>
        <p class="red--text text-center mx-12">{{item.text}}</p>      
      </v-col>
    </v-row>
  </v-container>  

</template>

<script>
  export default {
    data: () => ({
      service: [
        {
          img: require('@/assets/scp.png'),
          text: 'Scopus telah menjadi banyak tujuan oleh para peneliti dalam mempublikasikan artikel dan karyanya sehinggal dalam hal ini Bengkel Publikasi hadir sebagai partner para guru, dosen, peneliti membantu mempublikasikan artikel dan karyanya untuk terbit ke jurnal berindex scopus hingga Q1. ',
          title: 'Scopus'
        },
        {
          img: require('@/assets/sinta.png'),
          text: 'Bengkel Publikasi membantu para guru, dosen, peneliti dalam mempublikasikan artikel dan karyanya untuk terbit ke jurnal berindex scopus hingga Q1. ',
          title: 'Sinta'
        }
      ]
    })
  }
  

</script>


<style>

  p {
    line-height: 2;
  }
  
</style>
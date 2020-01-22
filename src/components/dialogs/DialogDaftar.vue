<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Daftar Artikel</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field label="First Name*"
                  v-model="firstname"
                  placeholder="Nama Depan"
                  required>
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field label="Last Name*"
                    v-model="lastname"
                    placeholder="Nama Belakang"
                    required>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" type="email"
                    v-model="form.email"
                    placeholder="contoh@yahoo.com"
                    required>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Organization*"
                  v-model="form.organization"
                  placeholder="Universitas, Sekolah, Lembaga"
                  required>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Pekerjaan*"
                  v-model="form.occupation"
                  required>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="phone number*"
                    v-model="form.phone_number"
                    required>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    counter
                    v-model="form.need"
                    label="keperluan"
                    :rules="rules"
                    :value="value"
                    required>
                  </v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-file-input show-size required
                    label="File input"
                    ref="file"
                    v-model="file"
                    @change="inputFile">
                  </v-file-input >
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    counter
                    v-model="form.title"
                    label="judul artikel"
                    :rules="rules"
                    required>
                  </v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-select
                  :items="layanan"
                  label="Jenis Layanan"
                  v-model="form.service"
                  solo
                  required>
                  </v-select>
                </v-col>
                <v-col cols="12">
                  <v-select
                  :items="preferensi"
                  label="Preferensi"
                  v-model="form.preferensi"
                  solo
                  required>
                  </v-select>
                </v-col>
                <v-col cols="12">
                  <h3>Proof Reading</h3>
                  <v-radio-group v-model="form.proof_reading">
                    <v-radio
                      v-for="n in proofReading"
                      :key="n"
                      :label="n"
                      :value="n"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">Close</v-btn>
            <v-btn color="blue darken-1" text @click="submit">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      rules: [v => v.length <= 10 || 'Max 10 characters'],
      value: 'keperluan!',
      file: [],
      firstname: '',
      lastname: '',
      form: {
        full_name: '',
        email: '',
        phone_number: '',
        occupation: '',
        organization: '',
        need: '',
        title: '',
        service: '',
        proof_reading: '',
        preferensi: '',
        file: ''
      },
      filedata: '',
      layanan: ['Editing Minor', 'Editing Mayor', "Publikasi Artikel", "Editing & Publikasi"
      ],
      preferensi: [
        'Scopus Q1', 'Scopus Q2', 'Scopus Q3', 'Scopus Q4', 'Sinta 1', 'Sinta 2', 'Sinta 3', 'Sinta 4' 
      ],
      proofReading: ["Grade A", "Grade B", "Grade C"]
    }),
    props: [
      'dialog',

    ],
    methods: {
      inputFile() {
        this.form.file = this.file
        this.createFile(this.file)
      },
      createFile (file) {
        // normally to preview image
        var reader = new FileReader()
        reader.onload = e => {
          this.filedata = e.target.result
        }
        reader.readAsDataURL(file)
      },
      close () {
        this.$emit('update:dialog', false)
      },
      submit () {
        let formData = new FormData()
        this.form.full_name = this.firstname
        formData.append("full_name", this.form.full_name)
        formData.append("email", this.form.email)
        formData.append("phone_number", this.form.phone_number)
        formData.append("occupation", this.form.occupation)
        formData.append("organization", this.form.organization)
        formData.append("need", this.form.need)
        formData.append("service", this.form.service)
        formData.append("preferensi", this.form.preferensi)
        formData.append("proof_reading", this.form.proof_reading)
        formData.append("file", this.form.file)
        formData.append("title", this.form.title)
        
        this.$store
          .dispatch('register_article', formData)
          .then((data)=> {
            console.log(data)
          })
          .catch((err)=> {
            console.log(err)
          })
        this.$emit('update:dialog', false)
      }
    }
  }
</script>         
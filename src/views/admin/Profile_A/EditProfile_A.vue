<template>
  <div v-if="userprofile">
    <div class="text-center">
      <p class="display-1">
        <v-icon x-large color="primary">
          mdi-file-document-edit-outline
        </v-icon>
        แก้ไขข้อมูลส่วนตัว
      </p>
    </div>
    <v-btn
        class="ma-2"
        color="black darken-2"
        dark
        @click="$router.push({name:'Profile'})"
    >
      <v-icon
          dark
          left
      >
        mdi-arrow-left
      </v-icon>Back
    </v-btn>
    <div class="d-flex justify-center">

      <v-card width="500" elevation="0">

        <v-container class="text-center">
          <v-img
              class="text-center grey lighten-5 rounded-circle d-inline-flex align-center justify-center ma-5"
              height="250"
              width="250"
              aspect-ratio="5"
              :src="getImageUri(userprofile.image)"
          ></v-img>
        </v-container>

        <br/>


        <v-file-input
            label="รูปภาพ"
            v-model="userprofile.image"
            outlined dense>
        </v-file-input>

        <v-text-field
            v-model="userprofile.nameStudent"
            item-text="nameStudent"
            label="ชื่อ-สกุล"
            single-line
            dense
            solo
        ></v-text-field>

        <v-text-field
            v-model="userprofile.position"
            item-text="position"
            label="ตำแหน่ง"
            single-line
            dense
            solo
        ></v-text-field>

        <v-text-field
            v-model="userprofile.rebuilding"
            item-text="rebuilding"
            label="ตึกที่รับผิดชอบ"
            single-line
            dense
            solo
        ></v-text-field>
        <v-text-field
            v-model="userprofile.contact"
            item-text="contact"
            label="เบอร์โทรศัพท์"
            single-line
            dense
            solo
        ></v-text-field>

        <v-text-field
            v-model="userprofile.face_book"
            item-text="face_book"
            label="Facebook"
            single-line
            dense
            solo
        ></v-text-field>


        <br>
        <div class="text-center">
          <v-btn class="mr-1" color="black" dark @click="save">บันทึก</v-btn>

        </div>


      </v-card>
    </div>
  </div>
</template>
<script>

import userprofile from "@/store/modules/userprofile";
import  {mapState} from 'vuex'
export default {
  components:{userprofile},
  name: "EditProfile_A",
  data: () => ({
        userprofile: null,

      }
  ),
  created() {
    this.loadProfile()

  },
  computed : {
    ...mapState({
      user : state => state.user.user
    })
  },

  methods: {

    async loadProfile() {
      let id = this.$route.params.id
      let data = await this.$store.dispatch('getUserprofile', id)
      console.log(
          data.userprofile
      )
      this.userprofile = data.userprofile


    },

    goToPhoto() {
      return this.userprofile.image
    },
    getImageUri(image) {
      let uri = image ? image : ""
      if (uri.startsWith("/media")) {
        return baseURL + uri.substring(1)
      } else {
        return uri
      }
    },
    async save() {
      let data = this.$store.dispatch('updateUserprofile', this.userprofile)
      if(data){
        this.$router.push({name: 'Profile'})
      }
      // await this.loadProfile()
    },

  }
  ,
}
</script>

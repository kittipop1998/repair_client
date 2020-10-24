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
    <div class="d-flex justify-center">

      <v-card width="500" elevation="0">
        <v-container class="text-center">
          <v-img
                  class="text-center grey lighten-5 rounded-circle d-inline-flex align-center justify-center ma-5"
                  height="250"
                  width="250"
                  aspect-ratio="5"
                  :src="getImageUri(userprofile.userprofile.image)"
          ></v-img>
        </v-container>
        <v-file-input
            label="รูปภาพ"
            v-model="userprofile.userprofile.image"
            outlined dense>
        </v-file-input>

        <v-text-field
            v-model="userprofile.userprofile.nameStudent"
            item-text="nameStudent"
            label="ชื่อ-สกุล"
            single-line
            dense
            solo
        ></v-text-field>

        <v-text-field
            v-model="userprofile.userprofile.student_id"
            item-text="student_id"
            label="รหัสนิสิต"
            single-line
            dense
            solo
        ></v-text-field>

        <v-text-field
            v-model="userprofile.userprofile.department"
            item-text="department"
            label="คณะ"
            single-line
            dense
            solo
        ></v-text-field>

        <v-text-field
            v-model="userprofile.userprofile.branch"
            item-text="department"
            label="สาขา"
            single-line
            dense
            solo
        ></v-text-field>
        <v-text-field
            v-model="userprofile.userprofile.contact"
            item-text="contact"
            label="เบอร์โทรศัพท์"
            single-line
            dense
            solo
        ></v-text-field>

        <v-text-field
            v-model="userprofile.userprofile.face_book"
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

export default {
  components:{userprofile},
  name: "EditProfile",
  data: () => ({
        userprofile: null,
      }
  ),
  created() {
    this.loadProfile()
  },
  methods: {

    async loadProfile() {
      let id = this.$route.params.id
      this.userprofile = await this.$store.dispatch('getUserprofile', id)
    },
    // goToPhoto() {
    //   return this.image
    // },

    async save() {
      this.$store.dispatch('updateUserprofile', this.userprofile)
      await this.loadProfile()
    },
    getImageUri(image) {
      let uri = image ? image : ""
      if (uri.startsWith("/media")) {
        return baseURL + uri.substring(1)
      } else {
        return uri
      }
    },
  }
  ,
}
</script>

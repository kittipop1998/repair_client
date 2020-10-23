<template>
  <div>
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
        <v-img
            aspect-ratio="2"
            contain
            :src="getImageUri(userprofile.userprofile.image)"
        ></v-img>

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


        <!--        <v-select-->
        <!--            v-model="repair.room"-->
        <!--            :items="room"-->
        <!--            label="หมายเลขห้อง"-->
        <!--            single-line-->
        <!--            item-text="nameRo"-->
        <!--            item-value="id"-->
        <!--            dense-->
        <!--            solo-->
        <!--        >-->
        <!--          <template slot="selection" slot-scope="data">-->
        <!--            หอ {{data.item ? data.item.dormitory.nameDo  : ''}}  {{ data.item ? data.item.room_type.nameTy :''}}  {{ data.item ? data.item.nameRo : '' }}-->

        <!--          </template>-->
        <!--          <template slot="item" slot-scope="data">-->
        <!--            หอ {{data.item ? data.item.dormitory.nameDo  : ''}}  {{ data.item ? data.item.room_type.nameTy :''}}  {{ data.item ? data.item.nameRo : '' }}-->

        <!--          </template>-->
        <!--        </v-select>-->

        <!--        <Select_date :date_value="repair.created_date"   @change="repair.created_date = $event" disabled/>-->
        <!--        <Repair_type :repair-type_value="repair.repair_type" @change="repair.repair_type = $event"/>-->


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
      this.userprofile = await this.$store.dispatch('getUserprofile')
    },
    goToPhoto() {
      return this.image
    },

    save() {
      this.$store.dispatch('updateUserprofile', this.userprofile)
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

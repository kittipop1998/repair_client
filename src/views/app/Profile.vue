<template>
  <div>
    <div class="text-center">
      <p class="display-1">
        <v-icon x-large color="primary">
          mdi-text-box-search-outline
        </v-icon>
        ข้อมูลส่วนตัว
      </p>
    </div>

    <v-btn class="font-weight-black-right" fab dark color="red" @click="$router.push({name:'EditProfile'})">
      <v-icon dark >mdi-plus</v-icon>
    </v-btn>
    แก้ไข
    <br/>

    <div class="d-flex justify-center" >
      <v-card width="750" elevation="0"
              v-if="userprofile"
              :headers="headers"
              :items="userprofile"
              sort-by="calories"
              class="elevation-1">

        <v-card class="mx-auto" >
          <v-card-text >
            <div class="font-weight-black" >
              <div>
                <p><span class="black--text">รูปภาพ:</span></p>
                <v-img
                    aspect-ratio="2"
                    contain
                    :src="goToPhoto()"
                ></v-img>
                <v-img
                    max-height="150"
                    max-width="250"
                    v-model="userprofile.image"
                    :src="goToPhoto()"
                ></v-img>
                <p><span class="black--text">ชื่อขสกุล:</span>  {{ userprofile.nameStudent}}</p>
                <p><span class="black--text">รหัสนิสิต:</span>  {{ userprofile.student_id}}</p>
                <p><span class="black--text">คณะ:</span>  {{ userprofile.department}}</p>
                <p><span class="black--text">สาขา:</span>  {{ userprofile.branch}}</p>
                <p><span class="black--text">หหมายเลข้องพัก:</span>  {{ userprofile.nameRo}}</p>
                <p><span class="black--text">ประเภทห้อง:</span>  {{ userprofile.room_type}}</p>
                <p><span class="black--text">หอพัก:</span>  {{ userprofile.dormitory}}</p>
                <p><span class="black--text">เบอร์โทรศัพท์:</span>  {{ userprofile.contact}}</p>
                <p><span class="black--text">Facebook:</span>  {{ userprofile.face_book}}</p>

              </div>
            </div>
          </v-card-text>
        </v-card><br>
      </v-card>
    </div>

  </div>



</template>
<script>

import Template from "../Template";
export default {
  components: { Template},
  name: "Profile",
  data: () => ({
        repair: null,
        room:null,
        userprofile:null,
      }
  ),
  created() {
    this.loadUserprofile()

  },
  methods: {

    async loadUserprofile() {
      let id = this.$route.params.id
      this.userprofile = await this.$store.dispatch('getUserprofile', id)
    },
    goToPhoto(){
      return this.userprofile.image
    },
  },


}
</script>
<style scoped>
</style>

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

<!--    <v-btn class="font-weight-black-right"-->
<!--           fab dark color="red"-->
<!--           @click="$router.push({name:'CreateProfile'})">-->
<!--      <v-icon dark >mdi-plus</v-icon>-->
<!--    </v-btn>-->
<!--    เพิ่มข้อมูลส่วนตัว-->
<!--    <br/>-->

    <v-btn class="font-weight-black-right"
           fab dark color="yellow"
           @click="$router.push({name:'EditProfile'})">
      <v-icon dark >mdi-plus</v-icon>
    </v-btn>
    แก้ไข
    <br/>

    <div class="d-flex justify-center" >

      <v-card width="750" elevation="0"
              v-if="userprofile"
              sort-by="calories"
              class="elevation-1">

        <v-card class="mx-auto"
        >
          <v-card-text >
            <div class="font-weight-black"  >
              <div>
                <v-container class="text-center">
                <v-img
                        class="text-center grey lighten-5 rounded-circle d-inline-flex align-center justify-center ma-5"
                        height="250"
                        width="250"
                        aspect-ratio="5"
                    :src="getImageUri(userprofile.userprofile.image)"
                ></v-img>
                </v-container>
<!--                <p><span class="black&#45;&#45;text">รูปภาพ:</span>  {{ userprofile.userprofile.image}}</p>-->
                <p><span class="black--text">ชื่อ-สกุล:</span>  {{ userprofile.userprofile.nameStudent}}</p>
                <p><span class="black--text">รหัสนิสิต:</span>  {{ userprofile.userprofile.student_id}}</p>
                <p><span class="black--text">คณะ:</span>  {{ userprofile.userprofile.department}}</p>
                <p><span class="black--text">สาขา:</span>  {{ userprofile.userprofile.branch}}</p>
                <p><span class="black--text">เบอร์โทรศัพท์:</span>  {{ userprofile.userprofile.contact}}</p>
                <p><span class="black--text">Facebook:</span>  {{ userprofile.userprofile.face_book}}</p>

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
// import Domitory from "@/components/Select_repair/Domitory";
// import Repair_type from "@/components/Select_repair/Repair_type";
export default {
  components: { Template},
  name: "Profile",
  data: () => ({
        // repair: null,
        // room:null,
        userprofile:null,
      }
  ),
  created() {
    this.loadProfile()
    // this.loadRoom()
    // this.loadRepair()
  },
  methods: {
    // async loadRoom() {
    //   this.room = await this.$store.dispatch('getRoom')
    // },
    // async loadRepair() {
    //   let id = this.$route.params.id
    //   this.repair = await this.$store.dispatch('getRepair', id)
    // },
    async loadProfile() {
      let id = this.$route.params.id
      this.userprofile = await this.$store.dispatch('getUserprofile')
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
}
</script>
<style>
</style>

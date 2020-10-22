<template>
  <v-container>
    <div>
      <!-- title-->
      <div>
        <div class="text-center">
          <p class="display-1">
            <v-icon x-large color="primary">
              mdi-alarm-bell
            </v-icon>
            ข้อมูลส่วนตัว
          </p>
        </div>
      </div>

      <!-- detail-->
      <div class="d-flex justify-space-around flex-wrap">
        <v-card class="ma-5" min-width="500" elevation="0">

          <v-file-input
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an avatar"
              prepend-icon="mdi-camera"
              label="รูปภาพ"
              v-model="form.image"
              outlined
              dense
          ></v-file-input>

          <div>
            <v-text-field label="ชื่อ-สกุล"
                          filled rounded dense
                          v-model="form.nameStudent"
                          :rules="[rules.required]"

            ></v-text-field>
          </div>

          <div>
            <v-text-field label="รหัสนิสิต"
                          filled rounded dense
                          v-model="form.student_id"
                          :rules="[rules.required]"></v-text-field>
          </div>

          <div>
            <v-text-field label="คณะ"
                          filled rounded dense
                          v-model="form.department"
                          :rules="[rules.required]"></v-text-field>
          </div>

          <div>
            <v-text-field label="สาขา"
                          filled rounded dense
                          v-model="form.branch"
                          :rules="[rules.required]"></v-text-field>
          </div>

          <div>
            <v-text-field label="เบอร์โทร"
                          filled
                          rounded
                          dense
                          v-model="repair.contact"
            ></v-text-field>
          </div>

          <div>
            <v-text-field label="หอพัก"
                          filled rounded dense
                          v-model="form.domitory"
                          :rules="[rules.required]"></v-text-field>
          </div>


          <!--        <v-select-->
          <!--            v-model="form.nameRo"-->
          <!--            :items="nameRo"-->
          <!--            label="หมายเลขห้อง"-->
          <!--            item-text="room"-->
          <!--            item-value="id"-->
          <!--            filled rounded dense-->
          <!--        >-->
          <!--          <template slot="selection" slot-scope="data">-->
          <!--            หอ {{data.item ? data.item.dormitory.nameDo  : ''}}  {{ data.item ?  data.item.room_type.nameTy : '' }} {{data.item ?  data.item.nameRo : '' }}-->
          <!--          </template>-->
          <!--          <template slot="item" slot-scope="data">-->
          <!--            หอ {{data.item ? data.item.dormitory.nameDo  : ''}}  {{ data.item ? data.item.room_type.nameTy :''}}  {{ data.item ? data.item.nameRo : '' }}-->
          <!--          </template>-->
          <!--        </v-select>-->


          <div>
            <v-text-field label="ห้อง"
                          filled rounded dense
                          v-model="form.nameRo"
                          :rules="[rules.required]"></v-text-field>
          </div>

          <div>
            <v-text-field label="ประเภทห้อง"
                          filled rounded dense
                          v-model="form.room_type"
                          :rules="[rules.required]"></v-text-field>
          </div>

          <div>
            <v-text-field label="Facebook"
                          filled rounded dense
                          v-model="form.face_book"
                          :rules="[rules.required]"></v-text-field>
          </div>

        </v-card>
      </div>

      <!--button-->
      <div class="ma-5">
        <div class="d-flex justify-space-around flex-wrap">
          <save-button @click="CreateProfile"></save-button>
          <cancel-button @click="$router.go(-1)"></cancel-button>
        </div>
      </div>
    </div>
  </v-container>


</template>

<script>
import Template from "../../Template";
import {mapState} from 'vuex'

export default {
  name: "EditProfile",
  components: {Template},
  data: () => ({

    menu: null,
    image: [
      value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
    ],
    nameStudent: null,
    student_id: null,
    department: null,
    branch: null,
    phone: null,
    facebook: null,
    domitory: null,
    room_sel: null,
    room: null,
    userprofile: null,
    user_profile: null,


    form: {
      "nameUs": "",
      "yearUs": "",
      "department": "",
      "branch": "",
      "phone": "",
      "facebook": "",
      "image": null,
      "userprofile": null,
      "user_profile": null,
      "domitory": null,
      "room": null,
      "room_type": null,


    }

  }),
  async mounted() {
    this.loadDormitory()
    this.loadRoom()
    this.loadRepair()
    if (!this.user) {
      await this.$store.dispatch('user/getUser')
    }

  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    async loadDormitory() {
      this.domitory = await this.$store.dispatch('getDomitory')
      if (this.domitory) {
        console.log(this.domitory)
      }

    },
    async loadRoom() {
      this.room = await this.$store.dispatch('getRoom')
      if (this.room) {
        console.log(this.room)
      }
    },
    async loadRepair() {
      this.repair = await this.$store.dispatch('getRepairType')
      if (this.repair) {
        console.log(this.repair)
      }


    },
    async save() {
      console.log(this.form, 'form')
      console.log(this.user, 'user')
      this.form.user_profile = this.user.id
      let data = await this.$store.dispatch('SaveUserprofile', this.form)
      if (data) {
        this.$router.push({name: 'Profile'})
      }

    }


  }

}


</script>

<style scoped>
</style>


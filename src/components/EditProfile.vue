<template>
  <v-container>
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
    <div class="d-flex justify-center">
      <v-card width="500" elevation="0">

        <v-file-input
            :rules="image"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an avatar"
            prepend-icon="mdi-camera"
            label="รูปภาพ"
            v-model="form.image"
            outlined
            dense
        ></v-file-input>

        <v-text-field
            v-model="form.nameUs"
            item-text="nameUs"
            label="ชื่อ-สกุล"
            single-line
            dense
            solo
        ></v-text-field>

        <v-text-field
            v-model="form.yearUs"
            item-text="yearUs"
            label="ปีการศึกษา"
            single-line
            dense
            solo
        ></v-text-field>

        <v-text-field
            v-model="form.department"
            item-text="department"
            label="คณะ"
            single-line
            dense
            solo
        ></v-text-field>

        <v-text-field
            v-model="form.branch"
            item-text="branch"
            label="สาขา"
            single-line
            dense
            solo
        ></v-text-field>

        <v-select
            v-model="form.domitory_sel"
            :items="domitory"
            label="หอพัก"
            placeholder="กรุณาเลือกหอพัก"
            item-text="nameDo"
            solo
        ></v-select>

        <v-select
            v-model="form.room"
            :items="room"
            label="หมายเลขห้อง"
            single-line
            item-text="nameRo"
            item-value="id"
            dense
            solo
        >
          <template slot="selection" slot-scope="data">
            {{ data.item ? data.item.room_type.nameTy : '' }} {{ data.item ? data.item.nameRo : '' }}
          </template>
          <template slot="item" slot-scope="data">
            {{ data.item ? data.item.room_type.nameTy : '' }} {{ data.item ? data.item.nameRo : '' }}
          </template>
        </v-select>


        <v-text-field
            v-model="form.facebook"
            item-text="facebook"
            label="Facebook"
            single-line
            dense
            solo
        ></v-text-field>

        <v-text-field
            v-model="form.phone"
            item-text="phone"
            label="หมายเลขโทรศัพท์ที่สามารถติดต่อได้"
            single-line
            dense
            solo
        ></v-text-field>


        <div class="text-center">
          <v-btn color="black" dark @click="save">บันทึก</v-btn>
        </div>


      </v-card>
    </div>
  </v-container>


</template>

<script>
import Template from "../views/Template";
import {mapState} from 'vuex'

export default {
  name: "EditProfile",
  components: {Template},
  data: () => ({

    menu: null,
    image: [
      value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
    ],
    nameUs: null,
    yearUs: null,
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
      let data = await this.$store.dispatch('saveRepair', this.form)
      if (data) {
        this.$router.push({name: 'Status'})
      }

    }


  }

}


</script>

<style scoped>
</style>


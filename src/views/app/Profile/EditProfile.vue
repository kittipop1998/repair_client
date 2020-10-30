<template>
  <div v-if="userprofile">
    <div class="text-center">
      <p class="display-1 font-weight-black">
        <v-icon x-large color="pink">
          mdi-text-box-search-outline
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
                  :src="getImageUri(userprofile.image)"
          ></v-img>
        </v-container>
        <br/>
        <v-list-item>
          <p>
            <v-icon class="ma-2"
                    color="indigo"
                    x-large>
            </v-icon>
          </p>
        <v-file-input
            label="รูปภาพ"
            v-model="userprofile.image"
            outlined dense>
        </v-file-input>
          </v-list-item>


        <v-list-item>
          <p >
            <v-icon class="ma-1"
                    color="purple"
                    x-large>mdi-face-outline
            </v-icon>
          </p>
        <v-text-field
            v-model="userprofile.nameStudent"
            item-text="nameStudent"
            label="ชื่อ-สกุล"
            single-line
            dense
            solo
        ></v-text-field>
          </v-list-item>

            <v-list-item>
              <p >
                <v-icon class="ma-1"
                        color="amber"
                        x-large>mdi-card-account-details-outline
                </v-icon>
              </p>
        <v-text-field
            v-model="userprofile.student_id"
            item-text="student_id"
            label="รหัสนิสิต"
            single-line
            dense
            solo
        ></v-text-field>
              </v-list-item>

        <v-list-item>
          <p >
            <v-icon class="ma-1"
                    color="brown"
                    x-large>mdi-school-outline
            </v-icon>
          </p>
        <v-text-field
            v-model="userprofile.department"
            item-text="department"
            label="คณะ"
            single-line
            dense
            solo
        ></v-text-field>
          </v-list-item>

        <v-list-item>
          <p >
            <v-icon class="ma-1"
                    color="deep-orange"
                    x-large>mdi-source-branch
            </v-icon>
          </p>
        <v-text-field
            v-model="userprofile.branch"
            item-text="department"
            label="สาขา"
            single-line
            dense
            solo
        ></v-text-field>
          </v-list-item>

        <v-list-item>
          <p >
            <v-icon class="ma-1"
                    color="blue"
                    x-large>mdi-phone-outline
            </v-icon>
          </p>
        <v-text-field
            v-model="userprofile.contact"
            item-text="contact"
            label="เบอร์โทรศัพท์"
            single-line
            dense
            solo
        ></v-text-field>
          </v-list-item>

        <v-list-item>
          <p >
            <v-icon class="ma-1"
                    color="blue"
                    x-large>mdi-facebook
            </v-icon>
          </p>
        <v-text-field
            v-model="userprofile.face_book"
            item-text="face_book"
            label="Facebook"
            single-line
            dense
            solo
        ></v-text-field>
          </v-list-item>







        <div class="text-center">
        <v-chip
                rounded
                dark @click="save"
                class="ma-2"
                color="purple"
        >
          <v-icon left>
            mdi-account-circle-outline
          </v-icon>
          Save
        </v-chip>
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
  name: "EditProfile",
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

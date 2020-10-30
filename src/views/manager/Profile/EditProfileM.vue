<template>
    <div v-if="userprofile">
        <div class="text-center">
            <p class="display-1 font-weight-black">
                <v-icon x-large color="pink">
                    mdi-file-document-edit-outline
                </v-icon>
                แก้ไขข้อมูลส่วนตัว
            </p>
        </div>

        <div class="d-flex justify-center">

            <v-card width="500" elevation="0">
                <v-list-item>
                    <p >
                        <v-icon class="ma-1"
                                color="purple"
                                x-large>mdi-account-tie
                        </v-icon>
                    </p>
                <v-text-field
                        v-model="userprofile.nameStudent"
                        item-text="nameStudent"
                        label="ชื่อ-สกุล(ผู้คุมหอพัก)"
                        single-line
                        dense
                        solo
                ></v-text-field>
                    </v-list-item>

<!--                <v-text-field-->
<!--                        v-model="userprofile.position"-->
<!--                        item-text="department"-->
<!--                        label="ตำแหน่ง"-->
<!--                        single-line-->
<!--                        dense-->
<!--                        solo-->
<!--                ></v-text-field>-->
<!--                <v-text-field-->
<!--                        v-model="userprofile.rebuilding"-->
<!--                        item-text="department"-->
<!--                        label="หอที่คุม"-->
<!--                        single-line-->
<!--                        dense-->
<!--                        solo-->
<!--                ></v-text-field>-->
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
        name: "EditProfileM",
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
                console.log(userprofile)
                let data = this.$store.dispatch('updateUserprofile', this.userprofile)
                if(data){
                    this.$router.push({name: 'Profile_M'})
                }
                // await this.loadProfile()
            },

        }
        ,
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <div class="text-center">
            <p class="display-1 font-weight-black">
                <v-icon x-large color="pink">
                    mdi-text-box-search-outline
                </v-icon>
                ข้อมูลส่วนตัว
            </p>
        </div>

        <v-chip
                class="ma-2"
                color="amber"
                text-color="white"
                @click="$router.push({name:'EditProfileM'})"
        >
            Edit
            <v-icon right>
                mdi-pencil-outline
            </v-icon>
        </v-chip>

        <div class="d-flex justify-center" >

            <v-card width="750" elevation="0"
                    v-if="userprofile"
                    sort-by="calories"
                    class="elevation-1 ">

                <v-card class="mx-auto"
                >
                    <v-card-text class="purple lighten-5" >
                        <div class="font-weight-black"  >
                            <div>
                                <p><span class="black--text">ชื่อ-สกุล(ผู้คุมหอพัก):</span>  {{ userprofile.userprofile.nameStudent}}</p>
<!--                                <p><span class="black&#45;&#45;text">ตำแหน่ง:</span>  {{ userprofile.userprofile.position}}</p>-->
<!--                                <p><span class="black&#45;&#45;text">หอที่คุม:</span>  {{ userprofile.userprofile.rebuilding}}</p>-->
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
    export default {
        components: { Template},
        name: "Profile_M",
        data: () => ({
                userprofile:null,
            }
        ),
        created() {
            this.loadProfile()
        },
        methods: {
            async loadProfile() {
                let id = this.$route.params.id
                this.userprofile = await this.$store.dispatch('getUserprofile')
                console.log(this.userprofile,'profileM')
            },
        }
    }
</script>

<style scoped>

</style>
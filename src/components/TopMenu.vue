<template>
    <div>
        <template>
            <div>
                <v-app-bar
                        color="black"
                        dense
                        dark
                >
                    <v-toolbar-title>แจ้งซ่อมพัสดุ/อุปกรณ์หอพัก</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn text @click="$router.push({name : 'Home'})">หน้าแรก</v-btn>
                    <v-btn text @click="$router.push({name : 'Recommend'})">แนะนำ</v-btn>
                    <v-btn text @click="$router.push({name : 'Contact'})">ติดต่อ</v-btn>
                    <v-btn text @click="checkLogin">{{login_text}}</v-btn>

                </v-app-bar>
            </div>
        </template>
    </div>
</template>

<script>

    import Template from "@/views/Template";
    import {mapState,mapMutations} from 'vuex'
    export default {
        name: "TopMenu",
        components: {Template},
        data: () => ({
            drawer: false,
            token: null,
        }),
        created() {
            this.getKey()
        },
        computed :{
            ...mapState({
                login_text : state => state.login_text
            })

        },
        methods: {
            checkLogin() {
                this.con +=1
                if (this.login_text === "Login") {
                    this.logout()
                } else {
                    this.login()
                }
                this.getKey()
            },
            login() {
                this.$router.push({name: 'Login'})
                this.$store.commit('setLoginText','Login')

            },
            logout() {
                localStorage.setItem('access_token', 'ca'); // set the item
                console.log(localStorage.getItem('access_token')); // retrieve the item
                localStorage.removeItem("access_token")
                localStorage.clear()
                this.$store.dispatch('user/logout')
                this.$router.push({
                    name: 'Login'
                })
            },
            getKey() {
                // let login_text = localStorage.getItem('access_token') ? "Logout" : "Login"
                // this.$store.commit('setLoginText',login_text)
            }
        },
        watch: {}
    }

</script>

<style scoped>

</style>

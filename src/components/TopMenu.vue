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
                    <v-btn text @click="$router.push({name : 'Login'})">เข้าสู่ระบบ</v-btn>

                </v-app-bar>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "TopMenu"
    }
</script>

<style scoped>

</style>
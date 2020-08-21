<template>
    <div>
        <div class="text-center">
            <p class="display-1">
                <v-icon x-large color="primary">
                    mdi-text-box-search-outline
                </v-icon>
                รายละเอียดการแจ้งซ่อม
            </p>
        </div>

        <div class="d-flex justify-center" >
            <v-card width="1100" elevation="0">
                <div class="ml-1">
                    <v-btn rounded color="black" class="mr-1" dark @click="$router.push({name : 'Status_M'})">กลับ</v-btn>
                </div><br>
                <v-card class="mx-auto" height="300">

                </v-card><br>

                <div class="ml-1">
                    <v-btn rounded color="black" class="mr-1" dark @click="$router.push({name : 'Details_M'})">ข้อมูลทั่วไป</v-btn>
                    <v-btn rounded color="orange darken-2" class="mr-1" dark @click="$router.push({name : 'Notification_M'})">ข้อมูลการเเจ้งซ่อม</v-btn>
                </div><br>

                <v-card class="mx-auto" height="300">

                </v-card><br>

                <p class="font-weight-black">รายการข้อมูลการดำเนินการ</p>

                <v-card class="mx-auto" height="300">

                </v-card><br>

            </v-card>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Details_M"
    }
</script>

<style scoped>

</style>
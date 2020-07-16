<template>
    <div>
        <div class="text-center">
            <p class="display-1">
                <v-icon x-large color="primary">
                mdi-clock-fast
             </v-icon>
                สถานะการแจ้งซ่อม
            </p>
        </div>
        <div  class="d-flex justify-center">
            <v-card width="600" elevation="0">
                    <v-data-table
                            :headers="headers"
                            :items="desserts"
                            :page.sync="page"
                            :items-per-page="itemsPerPage"
                            hide-default-footer
                            class="elevation-1"
                            @page-count="pageCount = $event"
                    ></v-data-table>
                <br>
                <div class="text-center">
                    <v-btn class="ma-0" color="black" dark @click="$router.push({name : ''})">ยืนยัน</v-btn>
                    <v-btn class="ma-2" color="black" dark @click="$router.push({name : ''})">แก้ไข</v-btn>
                    <v-btn class="ma-2 ml-0"  color="black" dark @click="$router.push({name : ''})">ยกเลิก</v-btn>
                    <v-btn color="black" dark @click="$router.push({name : 'Details'})">รายละเอียดการแจ้งซ่อม</v-btn>
                </div>
            </v-card>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Status",
        data () {
            return {
                page: 1,
                pageCount: 0,
                itemsPerPage: 10,
                headers: [
                    {
                        text: 'แจ้งซ่อม',


                    },
                    { text: 'อนุมัติการแจ้งซ่อม', value: 'อนุมัติการแจ้งซ่อม' },
                    { text: 'รอวัสดุ', value: 'รอวัสดุ' },
                    { text: 'เสร็จสิ้น', value: 'เสร็จสิ้น' },
                    { text: 'ยกเลิกคำร้อง', value: 'ยกเลิกคำร้อง' },
                ],

            }
        },
    }

</script>

<style scoped>

</style>
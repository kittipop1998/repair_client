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
                <v-card width="1100" elevation="0"
                        v-if="repair"
                        :headers="headers"
                        :items="repair"
                        sort-by="calories"
                        class="elevation-1">
                    <div class="ml-1">
                        <v-btn rounded color="black" class="mr-1" dark @click="$router.push({name : 'Status'})">กลับ</v-btn>
                    </div><br>

                    <v-card class="mx-auto" height="300">
                        <v-card-text >
                            <div class="font-weight-black">
                                <p>ชื่อ-สกุล:</p>
                                <p>คณะ:</p>
                                <p>สาขา:</p>
                                <p>เบอร์โทร:</p>
                            </div>
                        </v-card-text>
                    </v-card><br>

                    <p class="font-weight-black">ข้อมูลการแจ้งซ่อม</p>

                    <v-card class="mx-auto" height="300">
                        <v-card-text >
                            <div class="font-weight-black" >
                                <div>
                                <p>หอพัก:</p>
                                <p>ประเภทการแจ้งซ่อม:</p>
                                <p>รายละเอียดการซ่อม/ปัญหา:{{ repair.desc}}</p>
                                <p>สถานะการแจ้งซ่อม:</p>
                                <p>รูปภาพ:</p>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card><br>

                </v-card>

            </div>


        </div>




</template>

<script>
    import Select_date from "../../../components/Select_date";
    import Domitory from "../../../components/Select_repair/Domitory";
    import Repair_type from "../../../components/Select_repair/Repair_type";
    export default {
        components: {Repair_type, Domitory, Select_date},
        name: "Details",
        data: () => ({
                // form_params:{
                //     status:2
                //
                // },

                repair: null,
                room:null,
                headers: [
                    {text: 'ลำดับที่', value: 'id'},
                    {
                        text: 'ประเภทของการแจ้งซ่อม',
                        align: 'start',
                        sortable: false,
                        value: 'repairType_data',
                    },
                    {text: 'หมายเลขห้อง', value: 'room_data'},
                    {text: 'สถานะการแจ้งซ่อม', value: 'status'},
                    {text: 'วันที่แจ้งซ่อม', value: 'request_date'},
                    {text: 'วันที่อนุมัติรายการ', value: ''},
                    {text: 'วันที่สิ้นสุด', value: ''},
                    {text: 'รายละเอียด', value: 'desc'},
                    {text: 'แก้ไข/ลบ', value: 'actions', sortable: false}

                ],
            }


        ),
        created() {
            this.loadRoom()
            this.loadRepairDetails()
            // // this.$http.get('http://127.0.0.1:8000/api/Repairs/?format=json')
            //     .then((res) => {
            //         this.list = res;
            //         // console.warn(res);
            // })
        },
        methods: {
            async loadRoom() {
                this.room = await this.$store.dispatch('getRoom')
            },
            async loadRepairDetails() {
                this.repair = await this.$store.dispatch('getDetails')
                if (this.repair) {
                    console.log(this.repair)
                }
                console.log(this.repair, 'rest')
            },

        }
    }
</script>

<style scoped>
</style>
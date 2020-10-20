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
                <v-card width="750" elevation="0"
                        v-if="repair"
                        :headers="headers"
                        :items="repair"
                        sort-by="calories"
                        class="elevation-1">


                    <v-card class="mx-auto">
                        <v-card-text >
                            <div class="font-weight-black">
                                <p><span class="black--text">ชื่อ-สกุล:</span></p>
                                <p><span class="black--text">คณะ:</span></p>
                                <p><span class="black--text">สาขา:</span></p>
                                <p><span class="black--text">เบอร์โทร:</span>  {{repair.contact}}</p>
                            </div>
                        </v-card-text>
                    </v-card><br>

                    <p class="font-weight-black">ข้อมูลการแจ้งซ่อม</p>

                    <v-card class="mx-auto" >
                        <v-card-text >
                            <div class="font-weight-black" >
                                <div>
                                <p><span class="black--text">หอพัก:</span>  {{repair.room_data.dormitory.nameDo}} {{repair.room_data.nameRo}} {{repair.room_data.room_type.nameTy}}</p>
                                <p><span class="black--text">ประเภทการแจ้งซ่อม:</span>  {{repair.repairType_data.nameRe}}</p>
                                <p><span class="black--text">รายละเอียดการซ่อม/ปัญหา:</span>  {{ repair.desc}}</p>
                                <p><template>
                                    <div v-if="repair.status ==1" class="yellow--text"><span class="black--text">สถานะการแจ้งซ่อม:</span> แจ้งซ่อม</div>
                                    <div v-else-if="repair.status ==2" class="orange--text"><span class="black--text">สถานะการแจ้งซ่อม:</span> กำลังดำเนินงาน</div>
                                    <div v-else-if="repair.status ==3" class="green--text"><span class="black--text">สถานะการแจ้งซ่อม:</span> เสร็จสิ้น</div>
                                    <div v-else-if="repair.status ==4" class="red--text"><span class="black--text">สถานะการแจ้งซ่อม:</span> ยกเลิกคำร้อง</div><div v-else-if="repair.status ==4" class="red--text"><span class="black--text">สถานะการแจ้งซ่อม:</span> ยกเลิกคำร้อง</div>
                                </template></p>
                                    <p><span class="black--text">วันที่:</span>  {{gettime(repair.created_date)}}</p>
                                    <p><span class="black--text">รูปภาพ:</span></p>
                                <v-img
                                        aspect-ratio="2"
                                        contain
                                        :src="goToPhoto()"
                                ></v-img>

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
    import moment from "moment"
    export default {
        components: {Repair_type, Domitory, Select_date},
        name: "Details",
        data: () => ({

                repair: null,
                room:null,
            }
        ),
        created() {
            this.loadRoom()
            this.loadRepair()
        },
        methods: {
            gettime(date){
                return moment(date).format('LL');
            },
            async loadRoom() {
                this.room = await this.$store.dispatch('getRoom')
            },
            async loadRepair() {
                let id = this.$route.params.id
                this.repair = await this.$store.dispatch('getRepair', id)
            },
            goToPhoto(){
                return this.repair.image
            },
        },



    }
</script>

<style scoped>
</style>
<template>
  <div>
    <div class="text-center">
      <p class="display-1 font-weight-black">
        <v-icon x-large color="deep-orange">
          mdi-text-box-search-outline
        </v-icon>
        รายละเอียดการแจ้งซ่อม
      </p>
    </div>
            <div class="d-flex justify-center" >
                <v-card width="750" elevation="0"
                        sort-by="calories"
                        class="elevation-1"
                        v-if="repair">


                    <v-card class="mx-auto purple lighten-5">
                        <v-card-text >
                            <div class="font-weight-black">
                                <p><span class="black--text">รหัสนิสิต:</span> {{repair.userprofile.userprofile.student_id}}</p>
                                <p><span class="black--text">ชื่อ-สกุล:</span> {{repair.userprofile.userprofile.nameStudent}}</p>
                                <p><span class="black--text">คณะ: </span> {{repair.userprofile.userprofile.department}}</p>
                                <p><span class="black--text">สาขา:</span> {{repair.userprofile.userprofile.branch}} </p>
                                <p><span class="black--text">เบอร์โทร:</span>  {{repair.contact}}</p>
                            </div>
                        </v-card-text>
                    </v-card><br>

                    <p class="font-weight-black">ข้อมูลการแจ้งซ่อม</p>

                    <v-card class="mx-auto purple lighten-5">

                        <v-card-text >
                            <div class="font-weight-black" >
                                <div>
                                <p><span class="black--text">หอพัก:</span>  {{repair.room_data.dormitory.nameDo}} {{repair.room_data.nameRo}} {{repair.room_data.room_type.nameTy}}</p>
                                <p><span class="black--text">ประเภทการแจ้งซ่อม:</span>  {{repair.repairType_data.nameRe}}</p>
                                <p><span class="black--text">รายละเอียดการซ่อม/ปัญหา:</span>  {{ repair.desc}}</p>
                                    <p><span class="black--text">หมายเหตุ/วันที่สะดวก:</span>  {{ repair.note}}</p>
                                <p><template>
                                    <div v-if="repair.status ==1" class="amber--text"><span class="black--text">สถานะการแจ้งซ่อม:</span> แจ้งซ่อม</div>
                                    <div v-else-if="repair.status ==2" class="pink--text"><span class="black--text">สถานะการแจ้งซ่อม:</span> รออนุมัติ</div>
                                    <div v-else-if="repair.status ==3" class="orange--text"><span class="black--text">สถานะการแจ้งซ่อม:</span> กำลังดำเนินงาน</div>
                                    <div v-else-if="repair.status ==4" class="green--text"><span class="black--text">สถานะการแจ้งซ่อม:</span> เสร็จสิ้น</div>
                                    <div v-else-if="repair.status ==5" class="red--text"><span class="black--text">สถานะการแจ้งซ่อม:</span> ยกเลิกคำร้อง</div>
                                </template></p>
                                    <p class="purple--text"><span class="black--text">ช่าง:</span>{{ repair.technician}}</p>
                                    <p><span class="black--text">วันที่แจ้งซ่อม:</span>  {{repair.created_date?gettime(repair.created_date): ''}}</p>
                                    <p><span class="black--text">วันที่รออนุมัติ:</span>  {{repair.wait_date?gettime(repair.wait_date): ''}}</p>
                                    <p><span class="black--text">วันที่อนุมัติ/ดำเนินการแจ้งซ่อม:</span>  {{repair.approve_data?gettime(repair.approve_data): ''}}</p>
                                    <p><span class="black--text">วันที่เสร็จสิ้น:</span>  {{repair.completed_data? gettime(repair.completed_data): ''}}</p>
                                    <p><span class="black--text">ภาพก่อนการซ่อมแซม:</span></p>
                                <v-img
                                        aspect-ratio="2"
                                        contain
                                        :src="goToPhoto()"
                                ></v-img>
                                    <p><span class="black--text"><span class="green--text">ภาพหลังการซ่อมแซม:</span></span></p>
                                    <v-img
                                            v-model="repair.imageAf"
                                            aspect-ratio="2"
                                            contain
                                            :src="repair.imageAf ? repair.imageAf : ''"
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
                userprofile: null,
                repair: null,
                room:null,
            }
        ),
        created() {
            this.loadRoom()
            this.loadRepair()
            this.loadProfile()
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
                this.repair.technician = (this.repair.technician != 'null')?this.repair.technician:"";
            },
            goToPhoto(){
                return this.repair.imageBe
            },

            async loadProfile() {
                let id = this.$route.params.id
                this.userprofile = await this.$store.dispatch('getUserprofile')
            },
        },

    }
</script>
<style scoped>
</style>

<template>
    <div v-if="repair">
        <div class="text-center">
            <p class="display-1">
                <v-icon x-large color="primary">
                    mdi-file-document-edit-outline
                </v-icon>
                อัพเดทการแจ้งซ่อม
            </p>
        </div>
        <div class="d-flex justify-center">
            <v-card width="500" elevation="0">

                <Status :status_value="repair.status" @change="repair.status = $event"></Status>

                <v-text-field
                        @change="repair.technician = $event"
                        v-model="repair.technician"
                        items ="technician"
                        label="ช่างที่รับผิดชอบ"
                        single-line
                        dense
                        solo
                ></v-text-field>

                <v-select
                        v-model = "repair.room"
                        :items = "room"
                        item-text="nameRo"
                        item-value="id"
                        label="หมายเลขห้อง"
                        single-line
                        dense
                        solo
                >
                    <template slot="selection" slot-scope="data">
                    หอ {{data.item ? data.item.dormitory.nameDo  : ''}}  {{ data.item ? data.item.room_type.nameTy :''}}  {{ data.item ? data.item.nameRo : '' }}

                     </template>

                    <template slot="item" slot-scope="data">
                        หอ {{data.item ? data.item.dormitory.nameDo  : ''}}  {{ data.item ? data.item.room_type.nameTy :''}}  {{ data.item ? data.item.nameRo : '' }}
                    </template>
                </v-select>

            <Select_date :date_value="repair.created_date"   @change="repair.created_date = $event" disabled/>
                <Select_date3 :date_value="repair.wait_date"   @change="repair.wait_date = $event" disabled/>
                <Select_date1 :date_value="repair.approve_data"   @change="repair.approve_data = $event" disabled/>
                <Select_date2 :date_value="repair.completed_data"   @change="repair.completed_data = $event" disabled/>
            <Repair_type :repair-type_value="repair.repair_type" @change="repair.repair_type = $event"/>


            <v-textarea
                    v-model="repair.desc"
                    name="input-7-4"
                    solo
                    label="รายละเอียดการซ่อม/ปัญหา"
            ></v-textarea>

            <v-text-field
                    v-model="repair.contact"
                    item-text="contact"
                    label="หมายเลขโทรศัพท์ที่สามารถติดต่อได้"
                    single-line
                    dense
                    solo
            ></v-text-field>

                <v-text-field
                        v-model="repair.note"
                        item-text="note"
                        label="หมายเหตุ/ช่วงวันที่ว่าง"
                        single-line
                        dense
                        solo
                ></v-text-field>

                <p><span class="black--text">Before</span></p>
            <v-file-input
                    label="รูปภาพ/ถ้ามี"
                    v-model="repair.imageBe"
                    outlined dense>
            ></v-file-input>

            <v-img
                    v-model="repair.imageBe"
                    aspect-ratio="2"
                    contain
                    :src="goToPhoto()"
            ></v-img>

                <p><span class="black--text">After</span></p>
                <v-file-input
                        label="รูปภาพ/ถ้ามี"
                        v-model="repair.imageAf"
                        outlined dense>
                    ></v-file-input>
                <v-img
                        v-model="repair.imageAf"
                        aspect-ratio="2"
                        contain
                        :src="repair.imageAf ? repair.imageAf : ''"
                ></v-img>


            <br>
            <div class="text-center">
                <v-btn class="mr-1" color="black" dark @click="save">บันทึก</v-btn>
            </div>

            </v-card>
        </div>
    </div>
</template>


<script>
    import Select_date from "../../../components/Select_date";
    import Select_date1 from "../../../components/Select_date1";
    import Select_date2 from "../../../components/Select_date2";
    import Select_date3 from "../../../components/Select_date3";
    import Domitory from "../../../components/Select_repair/Domitory";
    import Repair_type from "../../../components/Select_repair/Repair_type";
    import Status from "../../../components/Select_repair/Status";

    export default {
        components: {Status, Repair_type, Domitory, Select_date, Select_date1, Select_date2, Select_date3},
        name: "Edit_M",
        data: () => ({
            repair : null,
            room : null,


        }),
        created() {
            this.loadRoom()
        },
        mounted() {

            this.loadRepair()
        },
        methods: {

            async loadRoom() {
                this.room = await this.$store.dispatch('getRoom')
            },
            async loadRepair() {
                let id = this.$route.params.id
                this.repair = await this.$store.dispatch('getRepair', id)
                this.repair.technician = (this.repair.technician != 'null')?this.repair.technician:"";
            },
            goToPhoto() {
                return this.repair.imageBe
            },
            async save(){
                console.log(this.repair,'editM')
                let data = await this.$store.dispatch('updateRepair', this.repair)
                if(data){
                    this.$router.push({name: 'Status_M'})
                }

            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div v-if="repair">
        <div class="text-center">
            <p class="display-1 font-weight-black">
                <v-icon x-large color="red">
                    mdi-file-document-edit-outline
                </v-icon>
                อัพเดทการแจ้งซ่อม
            </p>
        </div>
        <div class="d-flex justify-center">
            <v-card width="600" elevation="0">
                <v-list-item>
                    <p >
                        <v-icon class="ma-0"
                                color="brown"
                                x-large>mdi-list-status
                        </v-icon>
                    </p>
                <Status :status_value="repair.status" @change="repair.status = $event"></Status>
                    </v-list-item>

                <v-list-item>
                    <p >
                        <v-icon class="ma-0"
                                color="orange"
                                x-large>mdi-account-hard-hat
                        </v-icon>
                    </p>
                <v-text-field
                        @change="repair.technician = $event"
                        v-model="repair.technician"
                        items ="technician"
                        label="ช่างที่รับผิดชอบ"
                        single-line
                        dense
                        solo
                ></v-text-field>
                    </v-list-item>


                <v-list-item>
                    <p >
                        <v-icon class="ma-0"
                                color="indigo"
                                x-large>mdi-domain
                        </v-icon>
                    </p>
                <v-select
                        readonly
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
                    </v-list-item>


                <v-list-item>
                    <p >
                        <v-icon class="ma-1"
                                x-large>
                        </v-icon>
                    </p>
            <Select_date  :date_value="repair.created_date"   @change="repair.created_date = $event" disabled/>
                    </v-list-item>

                <v-list-item>
                    <p >
                        <v-icon class="ma-1"
                                x-large>
                        </v-icon>
                    </p>
                <Select_date3 :date_value="repair.wait_date"   @change="repair.wait_date = $event" disabled/>
                    </v-list-item>

                <v-list-item>
                    <p >
                        <v-icon class="ma-1"
                                x-large>
                        </v-icon>
                    </p>
                <Select_date1 :date_value="repair.approve_data"   @change="repair.approve_data = $event" disabled/>
                    </v-list-item>

                <v-list-item>
                    <p >
                        <v-icon class="ma-1"
                                x-large>
                        </v-icon>
                    </p>
                <Select_date2 :date_value="repair.completed_data"   @change="repair.completed_data = $event" disabled/>
                    </v-list-item>

                <v-list-item>
                    <p>
                        <v-icon class="ma-0"
                                color="teal"
                                x-large>mdi-hammer-wrench
                        </v-icon>
                    </p>
            <Repair_type :repair-type_value="repair.repair_type" @change="repair.repair_type = $event"/>
                    </v-list-item>


                <v-list-item>
                    <p>
                        <v-icon class="ma-0"
                                color="purple"
                                x-large>mdi-file-chart-outline
                        </v-icon>
                    </p>
            <v-textarea
                    readonly
                    v-model="repair.desc"
                    name="input-7-4"
                    solo
                    label="รายละเอียดการซ่อม/ปัญหา"
            ></v-textarea>
                    </v-list-item>

                <v-list-item>
                    <p >
                        <v-icon class="ma-0"
                                color="blue"
                                x-large>mdi-phone-outline
                        </v-icon>
                    </p>
            <v-text-field
                    readonly
                    v-model="repair.contact"
                    item-text="contact"
                    label="หมายเลขโทรศัพท์ที่สามารถติดต่อได้"
                    single-line
                    dense
                    solo
            ></v-text-field>
                    </v-list-item>

                <v-list-item>
                    <p>
                        <v-icon class="ma-0"
                                color="amber"
                                x-large>mdi-calendar-range
                        </v-icon>
                    </p>
                <v-text-field
                        readonly
                        v-model="repair.note"
                        item-text="note"
                        label="หมายเหตุ/ช่วงวันที่ว่าง"
                        single-line
                        dense
                        solo
                ></v-text-field>
                    </v-list-item>
                <p><span class="black--text font-weight-black">Before</span></p>

                <v-list-item>
                    <p >
                        <v-icon class="ma-1"
                                color="indigo"
                                x-large>
                        </v-icon>
                    </p>
            <v-file-input
                    label="รูปภาพ/ถ้ามี"
                    v-model="repair.imageBe"
                    outlined dense>
            ></v-file-input>
                    </v-list-item>
            <v-img
                    v-model="repair.imageBe"
                    aspect-ratio="2"
                    contain
                    :src="goToPhoto()"
            ></v-img>

                <p><span class="black--text font-weight-black">After</span></p>

                <v-list-item>
                    <p >
                        <v-icon class="ma-1"
                                color="indigo"
                                x-large>
                        </v-icon>
                    </p>
                <v-file-input
                        label="รูปภาพ"
                        v-model="repair.imageAf"
                        outlined dense>
                    ></v-file-input>
                    </v-list-item>
                <v-img
                        v-model="repair.imageAf"
                        aspect-ratio="2"
                        contain
                        :src="repair.imageAf ? repair.imageAf : ''"
                ></v-img>


            <br>
                <div class="text-center">
                    <v-chip
                            class="ma-2"
                            color="deep-purple accent-4"
                            dark @click="save"
                    >
                        <v-icon left>
                            mdi-wrench
                        </v-icon>
                        Update
                    </v-chip>
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
            this.loadRepair()
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
                    // await this.loadRepair()
                    this.$router.push({name: 'Status_M'})
                }

            }
        }
    }
</script>

<style scoped>

</style>
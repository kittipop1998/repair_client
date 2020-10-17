<template>
    <div>
        <div class="text-center">
            <p class="display-1">
                <v-icon x-large color="primary" class="text-center" @click="$router.push({name : 'Edit'})" >
                    mdi-clock-fast
                </v-icon>
                สถานะการแจ้งซ่อม
            </p>
        </div>
        <div class="text-center">
            <v-btn rounded color="black" class="mr-1" dark>ทั้งหมด</v-btn>
            <v-btn rounded color="orange darken-2" class="mr-1" dark @click="$router.push({name : 'Inform'})">แจ้งซ่อม
            </v-btn>
            <v-btn rounded color="orange darken-2" class="mr-1" dark @click="$router.push({name : 'Progress'})">
                กำลังดำเนินการ
            </v-btn>
            <v-btn rounded color="orange darken-2" class="mr-1" dark @click="$router.push({name : 'Completed'})">
                เสร็จสิ้น
            </v-btn>
            <v-btn rounded color="orange darken-2" class="mr-1" dark @click="$router.push({name : 'Cancel'})">
                ยกเลิกคำร้อง
            </v-btn>
        </div>
        <br>
        <v-data-table
                v-if="repair"
                :headers="headers"
                :items="repair"
                sort-by="calories"
                class="elevation-1"
        >
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title class="font-weight-black">รายการแจ้งซ่อม</v-toolbar-title>
                    <v-divider
                            class="mx-4"
                            inset
                            vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="550px">
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <div>

                                            <div class="d-flex justify-center">
                                                <v-card width="500" elevation="0">


                                                    <v-select
                                                            v-model="editedItem.domitory_sel"
                                                            :items="domitory"
                                                            label="หอพัก"
                                                            placeholder="กรุณาเลือกหอพัก"
                                                            item-text="nameDo"
                                                            solo
                                                    ></v-select>

                                                    <v-select
                                                            v-model="editedItem.room"
                                                            :items="room"
                                                            label="หมายเลขห้อง"
                                                            single-line
                                                            item-text="nameRo"
                                                            item-value="id"
                                                            dense
                                                            solo
                                                    >
                                                        <template slot="selection" slot-scope="data">
                                                            {{ data.item ? data.item.room_type.nameTy : '' }}
                                                            {{data.item ? data.item.nameRo : '' }}
                                                        </template>
                                                        <template slot="item" slot-scope="data">
                                                            {{ data.item ? data.item.room_type.nameTy :''}} {{ data.item
                                                            ? data.item.nameRo : '' }}
                                                        </template>
                                                    </v-select>
                                                    <Select_date
                                                            @change="editedItem.created_date = $event">

                                                    </Select_date>


                                                    <v-select
                                                            v-model="editedItem.repair_type"
                                                            :items="repair"
                                                            label="ประเภท"
                                                            single-line
                                                            item-text="nameRe"
                                                            item-value="id"
                                                            dense
                                                            solo
                                                    >
                                                        <template slot="selection" slot-scope="data">
                                                            {{ data.item ? data.item.repair_type : '' }} {{data.item ?
                                                            data.item.nameRe : '' }}
                                                        </template>
                                                        <template slot="item" slot-scope="data">
                                                            {{ data.item ? data.item.repair_type :''}} {{ data.item ?
                                                            data.item.nameRe : '' }}
                                                        </template>
                                                    </v-select>
                                                    <v-textarea
                                                            v-model="editedItem.desc"
                                                            solo
                                                            name="input-7-4"
                                                            label="รายละเอียดการซ่อม/ปัญหา"
                                                    ></v-textarea>
                                                    <v-text-field
                                                            v-model="editedItem.contact"
                                                            item-text="contact"
                                                            label="หมายเลขโทรศัพท์ที่สามารถติดต่อได้"
                                                            single-line

                                                            dense
                                                            solo
                                                    ></v-text-field>

                                                    <v-file-input
                                                            label="รูปภาพ/ถ้ามี"
                                                            v-model="editedItem.image"
                                                            outlined dense>
                                                    </v-file-input>


                                                </v-card>
                                            </div>
                                        </div>

                                    </v-row>
                                </v-container>
                            </v-card-text>


                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.status="{ item }">
                <div v-if="item.status ==1">
                    แจ้งซ่อม
                </div>
                <div v-else-if="item.status ==2">
                    กำลังดำเนินงาน
                </div>
                <div v-else-if="item.status ==3">
                    เสร็จสิ้น
                </div>
                <div v-else-if="item.status ==4">
                    ยกเลิกคำร้อง
                </div>

            </template>

            <template v-slot:item.actions="{ item }">
                <v-icon
                        small
                        class="mr-2"
                        v-icon x-large
                        color="#FFEB3B"
                        @click="$router.push({name : 'Edit',params : {id :item.id}})"
                >

                    mdi-pencil
                </v-icon>
                <v-icon
                        small
                        color="#F44336"
                        @click="deleteItem()"
                >
                    mdi-delete-outline
                </v-icon>
            </template>

            <template v-slot:item.room_data="{ item }">
                {{item.room_data.dormitory.nameDo}}
                {{ item.room_data.nameRo}}


            </template>
            <template v-slot:item.repairType_data="{ item }">
                {{item.repairType_data.nameRe}}


            </template>




        </v-data-table>
    </div>
</template>

<script>
    import Select_date from "../../../components/Select_date";


    export default {
        components: {Select_date},
        name: "Status",
        data: () => ({
                menu:null,
                date:null,
                domitory: null,
                domitory_sel: null,
                room_sel:null,
                room: null,
                nameRe: null,
                repair: null,
                user_profile: null,
                data_table: null,
                name: "",
                status: null,
                dialog: false,
                headers: [
                    {text: 'ลำดับที่', value: 'id'},
                    {
                        text: 'ประเภทของการแจ้งซ่อม',
                        align: 'start',
                        sortable: false,
                        value: 'repairType_data',
                    },
                    {text: 'หมายเลขห้อง', value: 'room_data'},
                    // {text: 'ข้อมูลนิสิต', value: ''},
                    {text: 'สถานะการแจ้งซ่อม', value: 'status'},
                    {text: 'วันที่แจ้งซ่อม', value: 'request_date'},
                    {text: 'วันที่อนุมัติรายการ', value: ''},
                    {text: 'วันที่สิ้นสุด', value: ''},
                    {text: 'รายละเอียด', value: ''},
                    {text: 'แก้ไข/ลบ', value: 'actions', sortable: false}

                ],
                desserts: [],
                editedIndex: -1,
                editedItem: {
                    domitory_sel: '',
                    room: 0,
                    created_date: 0,
                    repair_type: 0,
                    desc: 0,
                    contact: 0,
                    image: 0,
                },
                defaultItem: {
                    domitory_sel: '',
                    room: 0,
                    created_date: 0,
                    repair_type: 0,
                    desc: 0,
                    contact: 0,
                    image: 0,

                },
            }
        ),
        computed: {
            formTitle() {


                return this.editedIndex === -1 ? 'แก้ไขข้อมูลการแจ้งซ่อม' : 'Edit Item'
            },
        },
        watch: {
            dialog(val) {
                val || this.close()
            },
        },
        created() {
            this.loadDormitory()
            this.loadRoom()
            this.initialize()
            this.loadRepair()

        },
        methods: {
            async loadDormitory() {
                this.domitory = await this.$store.dispatch('getDomitory')
                if (this.domitory) {
                    console.log(this.domitory)
                }
                console.log(this.repair, 'rest')

            },
            async loadRoom() {
                this.room = await this.$store.dispatch('getRoom')
                if (this.room) {
                    console.log(this.room)
                }
                console.log(this.repair, 'rest')
            },
            async loadRepair() {
                this.repair = await this.$store.dispatch('getRepairs')
                if (this.repair) {
                    console.log(this.repair)
                }
                console.log(this.repair, 'rest')
            },


            initialize() {


                this.desserts = [{
                    form: {
                        "contact": "",
                        "desc": "",
                        "created_date": null,
                        "status": 1,
                        "image": null,
                        "user_profile": null,
                        "repair_type": null,
                        "domitory_sel": null,
                        "room_sel": null,
                        "room": null,
                        "request_date": null,
                        "actions": null

                    }
                }]
            }
            ,

            editItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            }
            ,

            deleteItem(item) {
                this.$store.dispatch('deleteRepair')
                const index = this.repair.indexOf(item)
                confirm('Are you sure you want to delete this item?') && this.repair.splice(index, 1)
            },

            close() {
                this.dialog = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            }
            ,



        }
        ,
    }
</script>
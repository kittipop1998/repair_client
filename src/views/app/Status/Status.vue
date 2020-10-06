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
                    <v-toolbar-title>รายการแจ้งซ่อม</v-toolbar-title>
                    <v-divider
                            class="mx-4"
                            inset
                            vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.name" label="ใบคำร้อง"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.id" label="เลขที่คำร้อง"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.data" label="ข้อมูลนิสิต"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.status" label="สถานะการแจ้งซ่อม"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.date"
                                                          label="วันที่แจ้งซ่อม"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.date1"
                                                          label="วันที่อนุมัติรายการ"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="รายละเอียด">
                                                <v-btn class="font-weight-black-right">
                                                    <v-icon dark>mdi-calendar-edit</v-icon>
                                                </v-btn>
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.date2"
                                                          label="วันที่สิ้นสุด"></v-text-field>
                                        </v-col>
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
            <template v-slot:item.actions="{ item }">
                <v-icon
                        small
                        class="mr-2"
                        @click="editItem(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                        small
                        @click="deleteItem()"
                >
                    mdi-delete-outline
                </v-icon>
            </template>
            <template v-slot:item.detail="{ item }">
                <v-icon
                        x-large
                        color="cyan accent-3"
                        class="mr-2"
                        @click="detailItem()"
                >
                    mdi-calendar-edit

                </v-icon>


            </template>

        </v-data-table>
    </div>
</template>

<script>
    export default {
        name: "Status",
        data: () => ({
                repair: null,
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
                        value: 'repair_type',
                    },
                    {text: 'ข้อมูลนิสิต', value: ''},
                    {text: 'สถานะการแจ้งซ่อม', value: 'status'},
                    {text: 'วันที่แจ้งซ่อม', value: 'request_date'},
                    {text: 'วันที่อนุมัติรายการ', value: ''},
                    {text: 'วันที่สิ้นสุด', value: ''},
                    {text: 'รายละเอียด', value: ''},
                    {text: 'แก้ไข/ลบ', value: ''}

                ],
                desserts: [],
                editedIndex: -1,
                editedItem: {
                    name: '',
                    id: 0,
                    data: 0,
                    status: 0,
                    date: 0,
                    date1: 0,
                    date2: 0,
                },
                defaultItem: {
                    name: '',
                    id: 0,
                    data: 0,
                    status: 0,
                    date: 0,
                    date1: 0,
                    date2: 0,

                },
            }
        ),
        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            },
        },
        watch: {
            dialog(val) {
                val || this.close()
            },
        },
        created() {
            this.initialize()
            this.loadRepair()
        },
        methods: {
            async loadRepair() {
                this.repair = await this.$store.dispatch('getRepairs')
                if (this.repair) {
                    console.log(this.repair)
                }
                console.log(this.repair, 'rest')}
            ,
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

                    }
                }




                    // {
                    //     name: 'แจ้งซ่อมไฟฟ้า',
                    //     id: 56554,
                    //     data: 'กิตติภพ มาตรศาลา',
                    //     status: 'แจ้งซ่อม',
                    //     date: '05/01/2563',
                    //     date1: '',
                    //     date2: '',
                    // },
                    // {
                    //     name: 'แจ้งซ่อมประปา',
                    //     id: 52144,
                    //     data: 'นายพงษ์นรินทร์ แหลมแท้',
                    //     status: 'เสร็จแล้ว',
                    //     date: '05/01/2563',
                    //     date1: '06/01/2563',
                    //     date2: '06/01/2563',
                    // },

                ]
            }
            ,

            editItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            }
            ,

            deleteItem(item) {
                const index = this.desserts.indexOf(item)
                confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
            }
            ,

            close() {
                this.dialog = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            }
            ,

            save() {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }
                this.close()
            }
            ,
        }
        ,
    }
</script>
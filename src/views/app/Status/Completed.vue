<template>
    <div>
        <div class="text-center">
            <p class="display-1 font-weight-black">
                <v-icon x-large color="brown">
                    mdi-clock-fast
                </v-icon>
                สถานะการแจ้งซ่อม
            </p>
        </div>
        <div class="text-center">
            <v-btn rounded color="amber lighten-2" class="mr-1" dark @click="$router.push({name : 'Status'})">ทั้งหมด</v-btn>
            <v-btn rounded color="amber lighten-2" class="mr-1" dark @click="$router.push({name : 'Inform'})">แจ้งซ่อม</v-btn>
            <v-btn rounded color="amber lighten-2" class="mr-1" dark @click="$router.push({name : 'Wait'})">รอการอนุมัติ</v-btn>
            <v-btn rounded color="amber lighten-2" class="mr-1" dark @click="$router.push({name : 'Progress'})">กำลังดำเนินการ</v-btn>
            <v-btn rounded color="purple lighten-2" class="mr-1" dark>เสร็จสิ้น</v-btn>
            <v-btn rounded color="amber lighten-2" class="mr-1" dark @click="$router.push({name : 'Cancel'})">ยกเลิกคำร้อง</v-btn>
        </div> <br>
        <v-data-table
                v-if="repair"
                :headers="headers"
                :items="repair"
                sort-by="calories"
                class="elevation-1 purple lighten-5"
        >
            <template v-slot:top>
                <v-toolbar flat color="purple lighten-4">
                    <v-toolbar-title class="font-weight-black">รายการแจ้งซ่อม</v-toolbar-title>
                    <v-divider
                            class="mx-4"
                            inset
                            vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                </v-toolbar>
            </template>
            <template v-slot:item.status="{ item }">
                <div v-if="item.status ==1" class="amber--text" >แจ้งซ่อม</div>
                <div v-else-if="item.status ==2" class="pink--text">รอการอนุมัติ</div>
                <div v-else-if="item.status ==3" class="orange--text">กำลังดำเนินงาน</div>
                <div v-else-if="item.status ==4" class="green--text">เสร็จสิ้น</div>
                <div v-else-if="item.status ==5" class="red--text">ยกเลิกคำร้อง</div>
            </template>



            <template v-slot:item.actions="{ item }">
                <v-icon
                        v-if="!(item.status ==3 || item.status ==4 || item.status ==5)"
                        small
                        class="mr-2"
                        v-icon x-large
                        color="#FFEB3B"
                        @click="$router.push({name : 'Edit',params : {id :item.id}})"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                        v-if="!(item.status ==3 || item.status ==4 || item.status ==5)"
                        small
                        color="#F44336"
                        @click="deleteItem(item)"
                >
                    mdi-close-circle
                </v-icon>
            </template>
            <template v-slot:item.detail="{ item }">
                <v-icon
                        x-large
                        color="cyan accent-3"
                        class="mr-2"
                        @click="$router.push({name : 'Details',params : {id :item.id}})"
                >
                    mdi-calendar-edit

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

    export default {
        name: "Completed",
        data: () => ({
                form_params:{
                    status:4
                },
                repair: null,
                headers: [
                    {text: 'หมายเลขคำร้อง', value: 'id', align: 'center'},
                    {
                        text: 'ประเภท',
                        align: 'start',
                        sortable: false,
                        value: 'repairType_data',
                    },
                    {text: 'หมายเลขห้อง', value: 'room_data'},
                    {text: 'สถานะการแจ้งซ่อม', value: 'status'},
                    {text: 'วันที่แจ้งซ่อม', value: 'created_date'},
                    {text: 'วันที่รออนุมัติ', value: 'wait_date'},
                    {text: 'วันที่อนุมัติรายการ', value: 'approve_data'},
                    {text: 'วันที่สิ้นสุด', value: 'completed_data'},
                    {text: 'รายละเอียด', value: 'detail', align: 'center'},
                    {text: 'แก้ไข/ลบ', value: 'actions', sortable: false}

                ],
            }
        ),

        created() {
            this.loadRoom()
            // this.initialize()
        },
        mounted() {
            this.loadRepair()
        },
        methods: {
            async loadRoom() {
                this.room = await this.$store.dispatch('getRoom')
                if (this.room) {
                    console.log(this.room)
                }
                console.log(this.repair, 'rest')
            },
            async loadRepair() {
                let user = await this.$store.dispatch('getUserprofile')

                this.form_params.user_id = user.id
                this.form_params.status = 4
                this.repair = await this.$store.dispatch('getRepairsM',this.form_params)
            },
            async deleteItem(item) {
                this.$swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!',
                    closeOnCancel: true
                }).then(async (result) => {
                    //send request to server
                    if (result.value) {
                        let data = await this.$store.dispatch('changestatus', item)
                        if (data != null) {
                            await this.loadRepair()
                            this.$swal(
                                'Cancel Request!',
                                'success!',
                                'success'
                            )
                        }
                    }
                })
            },
        },
    }
</script>
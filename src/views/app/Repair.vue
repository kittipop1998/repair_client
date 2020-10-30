<template>
    <div>
        <div class="text-center">
            <p class="display-1 font-weight-black">
                <v-icon x-large color="red darken-1">
                    mdi-file-document-edit-outline
                </v-icon>
                แจ้งซ่อม
            </p>
        </div>
        <div class="d-flex justify-center text-center">
            <v-card width="600" elevation="0">
                <v-list-item>
                    <p >
                    <v-icon class="ma-0"
                            color="indigo"
                            x-large>mdi-domain
                    </v-icon>
                    </p>
                <v-autocomplete

                        v-model="form.room"
                        :items="room"
                        label="หมายเลขห้อง"
                        single-line
                        item-text="nameRo"
                        item-value="id"
                        dense
                        solo
                >
                    <template slot="selection" slot-scope="data">
                        {{data.item ? data.item.dormitory.nameDo  : ''}} {{data.item ?  data.item.nameRo : '' }} {{ data.item ?  data.item.room_type.nameTy : '' }}
                    </template>
                    <template slot="item" slot-scope="data">
                         {{data.item ? data.item.dormitory.nameDo  : ''}} {{ data.item ? data.item.nameRo : '' }} {{ data.item ? data.item.room_type.nameTy :''}}
                    </template>
                </v-autocomplete >
                    </v-list-item>

<!--                <Select_date-->
<!--                        @change="form.created_date = $event" >-->
<!--                </Select_date>-->
                <v-list-item>
                    <p>
                        <v-icon class="ma-0"
                                color="teal"
                                x-large>mdi-hammer-wrench
                        </v-icon>
                    </p>
                <v-select
                        v-model="form.repair_type"
                        :items="repair"
                        label="ประเภท"
                        single-line
                        item-text="nameRe"
                        item-value="id"
                        dense
                        solo
                >
                    <template slot="selection" slot-scope="data">
                        {{ data.item ?  data.item.repair_type : '' }} {{data.item ?  data.item.nameRe : '' }}
                    </template>
                    <template slot="item" slot-scope="data">
                        {{ data.item ? data.item.repair_type :''}}  {{ data.item ? data.item.nameRe : '' }}
                    </template>
                </v-select>
                    </v-list-item>

                <v-list-item>
                    <p>
                        <v-icon class="ma-0"
                                color="purple"
                                x-large>mdi-file-chart-outline
                        </v-icon>
                    </p>
                <v-textarea
                        v-model="form.desc"
                        solo
                        name="input-7-4"
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
                        v-model="form.contact"
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
                        v-model="form.note"
                        item-text="note"
                        label="หมายเหตุ/ช่วงวันสะดวก"
                        single-line
                        dense
                        solo
                ></v-text-field>
                    </v-list-item>

                <v-list-item>
                    <p>
                        <v-icon class="ma-1"
                                color="indigo"
                                x-large>
                        </v-icon>
                    </p>
                <v-file-input
                        label="รูปภาพ/ถ้ามี"
                        v-model="form.imageBe"
                        outlined dense>
                </v-file-input>
                    </v-list-item>

                <div class="text-center">
                    <v-btn   rounded class="font-weight-black" color="purple" dark @click="save">ส่งคำร้องการแจ้งซ่อม</v-btn>
                </div>


            </v-card>
        </div>
    </div>
</template>

<script>
    import Template from "../Template";
    import Select_date from "../../components/Select_date";
    import  {mapState} from 'vuex'

    export default {
        name: "Repair",
        components: {Select_date, Template},
        data: () => ({
            menu:null,
            date:null,
            domitory: null,
            room_sel:null,
            room: null,
            nameRe: null,
            repair: null,
            user_profile: null,

            form: {
                "contact": "",
                "desc": "",
                "created_date": null,
                "status": 1,
                "imageBe": null,
                "imageAf": null,
                "user_profile": null,
                "repair_type": null,
                "room": null,
                "room_type":null,
                "note": "",
                "technician": null,
                "domitory_sel": null,
                "room_sel": null,


            }
        }),
        async mounted() {
            await this.loadRoom()
            await this.loadRepair()
            if(!this.user){
                await this.$store.dispatch('user/getUser')
            }

        },
        computed : {
            ...mapState({
                user : state => state.user.user
            })
        },
        methods: {
            async loadRoom() {
                this.room = await this.$store.dispatch('getRoom')
                if (this.room) {
                    console.log(this.room)
                }

            },
            async loadRepair() {
                this.repair = await this.$store.dispatch('getRepairType')
                if (this.repair) {
                    console.log(this.repair)
                }
            },
            async save(){
                console.log(this.form,'form')
                console.log(this.user,'user')
                this.form.user = this.user.id
                let data = await this.$store.dispatch('saveRepair', this.form)
                if(data){
                    this.$router.push({name: 'Status'})
                }

            }


        }

    }


</script>

<style scoped>
</style>

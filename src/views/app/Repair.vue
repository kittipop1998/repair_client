<template>
    <div>
        <div class="text-center">
            <p class="display-1">
                <v-icon x-large color="primary">
                    mdi-file-document-edit-outline
                </v-icon>
                แจ้งซ่อม
            </p>
        </div>
        <div class="d-flex justify-center">
            <v-card width="500" elevation="0">


                <v-select
                        v-model="domitory_sel"
                        :items="domitory"
                        label="หอพัก"
                        placeholder="กรุณาเลือกหอพัก"
                        item-text="nameDo"
                        solo
                ></v-select>

                <v-select
                        v-model="room_sel"
                        :items="room"
                        label="หมายเลขห้อง"
                        single-line
                        item-text="nameRo"
                        dense
                        solo
                >
                    <template slot="selection" slot-scope="data">
                        {{ data.item ?  data.item.room_type.nameTy : '' }} {{data.item ?  data.item.nameRo : '' }}
                    </template>
                    <template slot="item" slot-scope="data">
                        {{ data.item ? data.item.room_type.nameTy :''}}  {{ data.item ? data.item.nameRo : '' }}
                    </template>
                </v-select>
                <Select_date
                        @change="form.created_date = $event" >

                </Select_date>
<!--                <v-select-->
<!--                        v-model="form.repair_type"-->
<!--                        :items="form.repair_type_sel"-->
<!--                        label="ประเภท"-->
<!--                        placeholder="ระบุประเภท"-->
<!--                        item-text="nameRe"-->
<!--                        solo-->
<!--                >-->
<!--                    <template slot="selection" slot-scope="data">-->
<!--                        {{ data.item ?  data.item.repair_type : '' }} {{data.item ?  data.item.nameRe : '' }}-->
<!--                    </template>-->
<!--                    <template slot="item" slot-scope="data">-->
<!--                        {{ data.item ? data.item.repair_type :''}}  {{ data.item ? data.item.nameRo : '' }}-->
<!--                    </template>-->
<!--                </v-select>-->
                <v-select
                        v-model="nameRe"
                        :items="repair"
                        label="ประเภท"
                        single-line
                        item-text="nameRe"
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
                <v-textarea
                        v-model="form.desc"
                        solo
                        name="input-7-4"
                        label="รายละเอียดการซ่อม/ปัญหา"
                ></v-textarea>
                <v-text-field
                        v-model="form.contact"
                        item-text="contact"
                        label="หมายเลขโทรศัพท์ที่สามารถติดต่อได้"
                        single-line

                        dense
                        solo
                ></v-text-field>

                <v-file-input
                        label="รูปภาพ/ถ้ามี"
                        v-model="form.image"
                        outlined dense>
                </v-file-input>

                <div class="text-center">
                    <v-btn color="black" dark @click="save">ส่งคำร้องการแจ้งซ่อม</v-btn>
                </div>


            </v-card>
        </div>
    </div>
</template>

<script>
    import Template from "../Template";
    import Select_date from "../../components/Select_date";
    export default {
        name: "Repair",
        components: {Select_date, Template},
        data: () => ({
            menu:null,
            date:null,
            domitory: null,
            domitory_sel: null,
            room_sel:null,
            room: null,
            nameRe: null,
            repair: null,
            // items:[
            //     {
            //         items: 'repair_type'
            //     }
            // ],
            form: {
                "contact": "",
                "desc": "",
                "created_date": null,
                "status": 1,
                "image": null,
                "user_profile": null,
                // "repair_type": null,
                // "repair_type_sel":null,
            }
        }),
        mounted() {
            this.loadDormitory()
            this.loadRoom()
            this.loadRepair()

        },
        methods: {
            async loadDormitory() {
                this.domitory = await this.$store.dispatch('getDomitory')
                if (this.domitory) {
                    // console.log(this.domitory)
                }

            },
            async loadRoom() {
                this.room = await this.$store.dispatch('getRoom')
                if (this.room) {
                    // console.log(this.room)
                }
            },
            async loadRepair() {
                this.repair = await this.$store.dispatch('getRepairType')
                if (this.repair) {
                    console.log(this.repair)
                }


            },
            async save(){

                console.log(this.form)

            }


        }

    }


</script>

<style scoped>
</style>
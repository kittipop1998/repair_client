<template>
    <div v-if="repair">
        <div class="text-center">
            <p class="display-1 font-weight-black">
                <v-icon x-large color="red">
                    mdi-file-document-edit-outline
                </v-icon>
                แก้ไขแจ้งซ่อม
            </p>
        </div>
        <div class="d-flex justify-center">
            <v-card width="600" elevation="0">
                <v-list-item>
                    <p >
                        <v-icon class="ma-0"
                                color="indigo"
                                x-large>mdi-domain
                        </v-icon>
                    </p>
                <v-autocomplete
                        v-model="repair.room"
                        :items="room"
                        label="หมายเลขห้อง"
                        single-line
                        item-text="nameRo"
                        item-value="id"
                        dense
                        solo
                >
                    <template slot="selection" slot-scope="data">
                        {{data.item ? data.item.dormitory.nameDo  : ''}} {{ data.item ? data.item.nameRo : '' }} {{ data.item ? data.item.room_type.nameTy :''}}

                    </template>
                    <template slot="item" slot-scope="data">
                        {{data.item ? data.item.dormitory.nameDo  : ''}} {{ data.item ? data.item.nameRo : '' }} {{ data.item ? data.item.room_type.nameTy :''}}
                    </template>
                </v-autocomplete>
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
                        v-model="repair.desc"
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
                        v-model="repair.note"
                        item-text="note"
                        label="หมายเหตุ/ช่วงวันที่ว่าง"
                        single-line
                        dense
                        solo
                ></v-text-field>
                    </v-list-item>


                <v-list-item>
                    <p >
                        <v-icon class="ma-1"
                                color="indigo"
                                x-large>
                        </v-icon>
                    </p>
                <v-file-input
                        label="รูปภาพ"
                        v-model="repair.imageBe"
                        outlined dense>
                </v-file-input>
                    </v-list-item>
                <v-img

                        aspect-ratio="2"
                        contain
                        v-model="repair.imageBe"
                        :src="goToPhoto()"
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
    import Domitory from "../../../components/Select_repair/Domitory";
    import Repair_type from "../../../components/Select_repair/Repair_type";
    export default {
        components: {Repair_type, Domitory, Select_date},
        name: "Edit",
        data: () => ({
                repair : null,
                room : null
            }
        ),
        created() {
            this.loadRoom()
            this.loadRepair()
        },
        methods: {
            async loadRoom() {
                this.room = await this.$store.dispatch('getRoom')
            },
            async loadRepair() {
                let id = this.$route.params.id
                this.repair = await this.$store.dispatch('getRepair', id)
            },
            goToPhoto(){
              return this.repair.imageBe
            },
            async save() {
                console.log()
                let data = await this.$store.dispatch('updateRepair', this.repair)
                if(data){

                    await this.loadRepair()
                    // this.$router.push({name: 'Status'})
                }
            }

        }
    }
</script>
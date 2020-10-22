<template>
    <div>
        <div class="text-center">
            <p class="display-1">
                <v-icon x-large color="primary">
                    mdi-file-document-edit-outline
                </v-icon>
                แก้ไขแจ้งซ่อม
            </p>
        </div>
        <div class="d-flex justify-center">
            <v-card width="500" elevation="0">
                <v-select
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
                        หอ {{data.item ? data.item.dormitory.nameDo  : ''}}  {{ data.item ? data.item.room_type.nameTy :''}}  {{ data.item ? data.item.nameRo : '' }}

                    </template>
                    <template slot="item" slot-scope="data">
                        หอ {{data.item ? data.item.dormitory.nameDo  : ''}}  {{ data.item ? data.item.room_type.nameTy :''}}  {{ data.item ? data.item.nameRo : '' }}

                    </template>
                </v-select>

                <Select_date :date_value="repair.created_date"   @change="repair.created_date = $event" disabled/>
                <Repair_type :repair-type_value="repair.repair_type" @change="repair.repair_type = $event"/>

                <v-textarea
                        v-model="repair.desc"
                        solo
                        name="input-7-4"
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

                <v-file-input
                        label="รูปภาพ/ถ้ามี"
                        v-model="repair.image"
                        outlined dense>
                </v-file-input>
                <v-img
                        aspect-ratio="2"
                        contain
                        v-model="repair.image"
                        :src="goToPhoto()"
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
    import Domitory from "../../../components/Select_repair/Domitory";
    import Repair_type from "../../../components/Select_repair/Repair_type";
    export default {
        components: {Repair_type, Domitory, Select_date},
        name: "Status",
        data: () => ({
                repair : null,
                room : null,
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
              return this.repair.image
            },
            save() {
                this.$store.dispatch('updateRepair',this.repair)
            },

        }
        ,
    }
</script>
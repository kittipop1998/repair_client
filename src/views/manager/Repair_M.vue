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
        <div class="d-flex justify-center" >
            <v-card width="500" elevation="0">
                <v-text-field
                        label="ชื่อ-สกุล"
                        single-line
                        dense
                        solo
                ></v-text-field>
                <v-text-field
                        label="คณะ"
                        single-line
                        dense
                        solo
                ></v-text-field>
                <v-select
                        :items="items1"
                        label="หอพัก"
                        placeholder="กรุณาเลือกหอพัก"
                        solo
                ></v-select>
                <v-text-field
                        label="หมายเลขห้อง"
                        single-line
                        dense
                        solo
                ></v-text-field>
                <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                                v-model="date"
                                label="ระบุวันที่แจ้งซ่อม"
                                prepend-icon=""
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                dense
                                solo
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="ิblack" @click="menu = false">Cancel</v-btn>
                        <v-btn text color="black" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                </v-menu>
                <v-select
                        :items="items"
                        label="ประเภท"
                        placeholder="ระบุประเภท"
                        solo
                ></v-select>
                <v-textarea
                        solo
                        name="input-7-4"
                        label="รายละเอียดการซ่อม/ปัญหา"
                ></v-textarea>
                <v-text-field
                        label="หมายเลขโทรศัพท์ที่สามารถติดต่อได้"
                        single-line
                        dense
                        solo
                ></v-text-field>
                <v-file-input label="รูปภาพ/ถ้ามี" outlined dense></v-file-input>
                <div class="text-center">
                    <v-btn color="black" dark @click="$router.push({name : 'Status_M'})">ส่งคำร้องการแจ้งซ่อม</v-btn>
                </div>

            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Repair_M",
        data: () => ({
            items: ['ระบุประเภท', 'ไฟฟ้า', 'ประปา', 'เฟอร์นิเจอร์'],
            items1: ['กรุณาเลือกหอพัก', 'UP DORM 1 (ห้องปรับอากาศ)', 'UP DORM 2 (ห้องพัดลม)',
                'UP DORM 3 (ห้องพัดลม)', 'UP DORM 4 (ห้องพัดลม)', 'UP DORM 5 (ห้องพัดลม)',
                'UP DORM 6 (ห้องพัดลม)', 'UP DORM 7 (ห้องพัดลม)', 'UP DORM 8 (ห้องพัดลม)',
                'UP DORM 9 (ห้องพัดลม)', 'UP DORM 10 (ห้องปรับอากาศ)', 'UP DORM 11 (ห้องปรับอากาศ)',
                'UP DORM 12 (ห้องปรับอากาศ)', 'UP DORM 13 (ห้องปรับอากาศ)', 'UP DORM 14 (ห้องพัดลม)',
                'UP DORM 15 (ห้องพัดลม)', 'UP DORM 16 (ห้องพัดลม)', 'UP DORM 17 (ห้องพัดลม)',
                'UP DORM 18 (ห้องพัดลม)', 'UP DORM 19 (ห้องพัดลม)', 'UP DORM 20 (ห้องพัดลม)',
                'UP DORM 21 (ห้องพัดลม)', 'UP DORM 22 (ห้องพัดลม)', 'UP DORM 23 (ห้องพัดลม)',
                'UP DORM 24 (ห้องพัดลม)', 'UP DORM 25 (ห้องปรับอากาศ)', 'UP DORM 26 (ห้องปรับอากาศ)',
                'UP DORM 27 (ห้องปรับอากาศ)', 'UP DORM 28 (ห้องปรับอากาศ)', 'UP DORM 29 (ห้องปรับอากาศ)',
                'UP DORM 30 (ห้องปรับอากาศ)', 'UP DORM 31 (ห้องปรับอากาศ)', 'UP DORM 32 (ห้องปรับอากาศ)'],
        }),
        data1: () => ({
            date: new Date().toISOString().substr(0, 10),
            menu: false,

        }),

    }
</script>

<style scoped>

</style>
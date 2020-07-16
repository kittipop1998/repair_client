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
                <v-text-field
                        label="กรุณาเลือกหอพัก"
                        single-line
                        dense
                        solo
                ></v-text-field>
                <v-text-field
                        label="หมายเลขห้อง"
                        single-line
                        dense
                        solo
                ></v-text-field>
                <v-select
                        :items="items"
                        label="ประเภท"
                        placeholder="ระบุ"
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
                    <v-btn color="black" dark @click="$router.push({name : 'Status'})">ส่งคำร้องการแจ้งซ่อม</v-btn>
                </div>

            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Repair",
        data: () => ({
            items: ['ไฟฟ้า', 'ประปา', 'เฟอร์นิเจอร์'],
        }),

    }

</script>

<style scoped>

</style>
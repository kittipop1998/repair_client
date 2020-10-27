<template>
        <v-select
                v-model="status"
                :items="status_choices"
                label="สถานะ"
                single-line
                item-value="id"
                item-text="text"
                dense
                solo
                @change="$emit('change', status)"

        >
        </v-select>

</template>

<script>
    export default {
        form_params:{
            status:null
        },
        props:{
            status_value:{
                type:Number,
                default:null
            }
        },
        name: "Status",
        data: () => ({
                status_choices: [
                        {id : 1,text:"แจ้งซ่อม"},
                        {id : 2,text:"รอการอนุมัติ"},
                        {id : 3,text:"กำลังดำเนินการ"},
                        {id : 4,text:"เสร็จสิ้น"},
                        {id : 5,text:"ยกเลิกคำร้อง"},
                ],
                // repair_types:null,
                repair :null,
                status: null,

            }
        ),
        created() {
            this.status = this.status_value

        },
        async mounted()  {
            await this.loadRepair()
        },

        methods: {
            // async loadRepair() {
            //     this.status = await this.$store.dispatch('getRepairs')
            //     if (this.this.status) {
            //     }
            //     console.log(this.status)
            // },
            async loadRepair() {
                let id = this.$route.params.id
                this.repair = await this.$store.dispatch('getRepair', id)
            },
        }
    }
</script>

<style scoped>

</style>
<template>
    <v-select
            v-model="repair_type"
            :items="repair_types"
            label="ประเภท"
            single-line
            item-text="nameRe"
            item-value="id"
            dense
            solo
            @change="$emit('change',repair_type)"

    >
        <template slot="selection" slot-scope="data">
            {{ data.item ? data.item.repair_type : '' }} {{data.item ? data.item.nameRe : '' }}
        </template>
        <template slot="item" slot-scope="data">
            {{ data.item ? data.item.repair_type :''}} {{ data.item ? data.item.nameRe : '' }}
        </template>
    </v-select>
</template>

<script>
    export default {
        props:{
            repairType_value:{
                type:Number,
                default:null
            }
        },
        name: "Repair_type",
        data: () => ({
                repair_types:null,
                repair_type:null,
            }
        ),
        created() {
            this.repair_type = this.repairType_value
        },
        async mounted()  {
            await this.loadData()
        },
        methods: {
            async loadData() {
                this.repair_types = await this.$store.dispatch('getRepairType')
                if (this.repair_types) {
                }
                console.log(this.repair_types,'re')
            }
            ,
        }
    }
</script>

<style scoped>

</style>
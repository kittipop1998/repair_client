<template>
    <v-select
            v-model="domitory"
            :items="domitory_sel"
            label="หอพัก"
            placeholder="กรุณาเลือกหอพัก"
            item-text="nameDo"
            item-value="id"
            solo
            @change="$emit('change',domitory_sel)"
    ></v-select>
</template>

<script>
    export default {
        props:{
            value:{
                Type:Number,
                default:null
            }
        },
        name: "Domitory",
        data: () => ({
                domitory: null,
                domitory_sel: null
            }
        ),
        created() {
            this.domitory = this.value
        },
        async mounted() {
            console.log(this.value,'props')
            await this.loadDormitory()
            console.log(this.domitory_sel,'sel')
        },
        methods: {
            async loadDormitory() {
                this.domitory_sel = await this.$store.dispatch('domitory/getDomitory')
                if (this.domitory_sel) {
                    console.log(this.domitory_sel)
                }
            },

        },
    }
</script>

<style scoped>

</style>
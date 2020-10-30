<template>
    <div>
        <v-dialog
                ref="dialog"
                v-model="dialog"
                :return-value.sync="date"
                persistent
                width="290px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                        v-model="date"
                        dense
                        label="วันที่เสร็จสิ้น"
                        prepend-icon="mdi-calendar"
                        readonly
                        solo
                        single-line
                        v-bind="attrs"
                        v-on="on"
                        @change="$emit('change',date)"

                ></v-text-field>
            </template>
            <v-date-picker
                    v-if="dialog"
                    v-model="date"
                    scrollable
                    color="purple"
            >
                <v-spacer></v-spacer>
                <v-btn
                        text
                        color="black"
                        @click="dialog = false"
                >
                    Cancel
                </v-btn>
                <v-btn
                        text
                        color="purple"
                        @click="save(date)"
                >
                    OK
                </v-btn>
            </v-date-picker>
        </v-dialog>
    </div>
    
</template>

<script>
    export default {
        name: "Select_date2",
        props: {
            label: {
                type: String,
                require: false,
                default: "date piker"
            },
            date_value: {
                type: String,
                require: false,
                default: null
            }
        },
        data: () => ({
            date: null,
            dialog: false
        }),
        mounted() {
            this.date = this.date_value;
            this.$refs.dialog.save(this.date_value);
        },
        methods: {
            switchDialog() {
                this.dailog = !this.dialog;
            },
            save(date) {
                this.time = date;
                this.$refs.dialog.save(date);
                this.$emit('change', date);
                this.switchDialog();

            }
        }
    }
</script>

<style scoped>

</style>
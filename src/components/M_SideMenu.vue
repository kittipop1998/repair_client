<template>
    <div>
        <v-navigation-drawer permanent>


            <v-divider></v-divider>

            <v-list
                    dense
                    nav
            >
                <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                        exact
                        :to="item.to"
                >
                    <v-list-item-icon >
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    </div>
</template>

<script>
    export default {
        name: "M_SideMenu",
        data() {
            return {
                items: [
                    {title: 'สถานะการแจ้งซ่อม', icon: 'mdi-clock-fast',to : {name : 'Status_M'}},
                    {title: 'ข้อมูลส่วนตัว', icon: 'mdi-alarm-bell',to : {name : 'Profile_M'}},
                    {title: 'จัดการช่าง', icon: 'mdi-account-hard-hat',to : {name : 'Technician'}},
                    {title: 'สถิติของการแจ้งซ่อม', icon: 'mdi-align-vertical-bottom',to : {name : 'Statistic'}},
                ],
                right: null,
            }
        },
    }
</script>

<style scoped>

</style>
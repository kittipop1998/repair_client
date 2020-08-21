<template>
    <div class="d-flex" style="width: 100%">
        <M_SideMenu></M_SideMenu>
        <v-container>
            <router-view></router-view>
        </v-container>
    </div>
</template>

<script>
    import M_SideMenu from "../../components/M_SideMenu";

    export default {
        name: "ManagerTemplate",
        components: {M_SideMenu}
    }
</script>

<style scoped>

</style>
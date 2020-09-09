<template>
    <div class="d-flex" style="width: 100%">
        <O_SideMenu></O_SideMenu>
        <v-container>
            <router-view></router-view>
        </v-container>
    </div>
</template>

<script>
    import O_SideMenu from "../../components/O_SideMenu";

    export default {
        name: "OfficerTemplate",
        components: {O_SideMenu}
    }
</script>

<style scoped>

</style>
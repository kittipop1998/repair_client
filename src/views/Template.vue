<template>
    <div class="fill-height">
        <TopMenu></TopMenu>
        <v-main class="fill-height">
            <v-layout class="fill-height">
                <router-view></router-view>
            </v-layout>
        </v-main>
    </div>
</template>

<script>
    import TopMenu from "../components/TopMenu";

    export default {
        name: "Template",
        components: {TopMenu}
    }
</script>

<style scoped>

</style>

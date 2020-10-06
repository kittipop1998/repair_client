<template>
  <div class="d-flex" style="width: 100%">
    <SideMenu></SideMenu>
    <v-container>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
import SideMenu from "../../components/SideMenu";

export default {
  name: "AdminTemplate",
  components: {SideMenu}
}
</script>

<style scoped>

</style>

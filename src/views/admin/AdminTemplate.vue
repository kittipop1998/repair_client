<template>
  <div class="d-flex" style="width: 100%">
    <A_SideMenu></A_SideMenu>
    <v-container>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
import A_SideMenu from "../../components/A_SideMenu";

export default {
  name: "AdminTemplate",
  components: {A_SideMenu}
}
</script>

<style scoped>
</style>

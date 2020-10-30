<template>
  <div>
    <template>
      <div>
        <v-app-bar
            color="purple"
            dense
            dark
        >
          <v-list-item  class="display-1 font-weight-black text-center">
            <v-icon class="ma-1"
                    x-large
                    color="amber"
                    x-large>mdi-hammer-wrench
            </v-icon>
            Dorm Fix
          </v-list-item>

          <v-spacer></v-spacer>

          <v-btn text class="font-weight-black" @click="$router.push({name : 'Home'})">หน้าแรก</v-btn>
          <v-btn text class="font-weight-black" @click="$router.push({name : 'Logout'})">ออกจากระบบ</v-btn>

        </v-app-bar>
      </div>
    </template>
  </div>
</template>

<script>

import Template from "@/views/Template";
export default {
  name: "TopMenu2",
  components: {Template},
  data: () => ({
    drawer: false,
  }),
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
      localStorage.removeItem('apiToken')
      this.$router.push({
        name: 'Login'
      })
    }
  }
}

</script>

<style scoped>

</style>

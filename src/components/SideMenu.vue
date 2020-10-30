<template>
  <div class="pink">
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
            color="purple darken-1 purple lighten-5"

        >
          <v-list-item-icon>
            <v-icon
                    color="purple darken-1"

            >{{ item.icon }}</v-icon>
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
  name: "SideMenu",
  data() {
    return {
      items: [
        {title: 'แจ้งซ่อม', icon: 'mdi-file-document-edit-outline', to: {name: 'Repair'}},
        {title: 'สถานะการแจ้งซ่อม', icon: 'mdi-clock-fast', to: {name: 'Status'}},
        {title: 'ข้อมูลส่วนตัว', icon: 'mdi-alarm-bell', to: {name: 'Profile'}},
      ],
      right: null,
    }
  },
}
</script>

<style scoped>

</style>

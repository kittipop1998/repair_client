<template>
  <div>

    <v-btn
        color="green accent-3"
        @click="$emit('click')"
        rounded
    >
      <slot>
        <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
        <p>..</p>บันทึก
      </slot>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "SaveButton"
}
</script>

<style scoped>

</style>

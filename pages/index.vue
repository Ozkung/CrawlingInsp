<template>
  <div>
    Test
    <v-btn @click="logout()">logout</v-btn>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  async mounted() {
    // let api = await this.$axios.get('http://localhost:8083/testmiddle')
    // console.log('api :', api);
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>

<style lang="scss" scoped></style>

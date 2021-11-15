<template>
  <div class="content-index d-flex justify-center align-center flex-wrap">
    <Profile v-for="(item, index) in generate" :key="index" :generate="item" />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Profile from '~/components/cardcoin.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  data() {
    return {
      generate: null,
    }
  },
  components: {
    Logo,
    VuetifyLogo,
    Profile,
  },
  mounted() {
    this.getDataTable()
    // setInterval(() => {
    //   this.getDataTable()
    // }, 10000)
  },
  methods: {
    async getDataTable() {
      this.generate = await this.$axios.$get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=thb&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
    },
  },
}
</script>
<style>
html {
  line-height: 1.75px;
  font-size: 1.25em;
}
</style>

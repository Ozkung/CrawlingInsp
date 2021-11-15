<template>
  <div>
    <v-card width="390" style="margin: 5px">
      <v-card-title>
        <div class="d-flex align-center">
          <v-img max-width="52px" max-height="52px" :src="generate.image" />
          <div class="pl-5" >
            <div>
              {{ generate.name }}
            </div>
            <div>
              {{ generate.current_price.toLocaleString() }} THB
            </div>
          </div>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['generate'],
}
</script>

<style>
</style>
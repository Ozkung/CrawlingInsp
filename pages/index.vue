<template>
  <div class="bg-app_food">
    <div class="centerPos">
      <v-card class="mx-auto px-6 py-8" min-width="340">
        <v-form v-model="form" @submit.prevent="onSubmit">
          <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            clearable
            label="Email"
          ></v-text-field>

          <v-text-field
            type="password"
            v-model="password"
            :readonly="loading"
            :rules="[required]"
            clearable
            label="Password"
            placeholder="Enter your password"
          ></v-text-field>

          <br />

          <v-btn
            :disabled="!form"
            :loading="loading"
            block
            color="success"
            size="large"
            type="submit"
            variant="elevated"
          >
            Sign In
          </v-btn>
        </v-form>
        <v-divider class="my-3" />
        <v-btn block color="#E53935" size="large">
          <div style="color: #fff">Create Account</div>
        </v-btn>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false,
  }),

  methods: {
    async onSubmit() {
      if (!this.form) return

      this.loading = true
      let obj = {
        username: this.email,
        password: this.password,
      }
      let api = await this.$axios.post(
        'http://192.168.1.200:8082/api/login',
        obj
      )
      console.log('massage from server :', api.data.msg)
      this.loading = false
    },
    required(v) {
      return !!v || 'Field is required'
    },
  },
}
</script>

<style lang="scss" scoped>
.bg-app_food {
  background: $subMemo;
  height: 100%;
  width: 100%;
  .centerPos {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
  }
}
</style>

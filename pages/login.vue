<template>
  <div class="bg-app_food">
    <div class="centerPos">
      <div class="d-flex justify-center ma-8" style="flex-direction: column">
        <h1 class="fontTitle p_fadeIn">Havememo</h1>
        <b class="p_fadeIn" style="font-size: 20px"
          >Community of people who love cooking.</b
        >
      </div>
      <v-card class="px-6 py-8" min-width="340">
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
        <v-btn block color="#E53935" size="large" @click="dialog = !dialog">
          <div style="color: #fff">Create Account</div>
        </v-btn>
      </v-card>
    </div>

    <v-dialog v-model="dialog" min-width="320" max-width="400">
      <v-card class="py-3 px-4">
        <h1>Sign Up</h1>
        <div>
          <v-form v-model="registor" @submit.prevent="onRegistor">
            <div class="d-flex">
              <!-- First Name -->
              <v-text-field
                v-model="form_registor.name"
                :readonly="confirm"
                :rules="[required]"
                class="px-1"
                clearable
                label="First Name"
                placeholder="Enter your First Name"
              ></v-text-field>
              <!-- Last Name -->
              <v-text-field
                v-model="form_registor.lastname"
                :readonly="confirm"
                :rules="[required]"
                class="px-1"
                clearable
                label="Lastname"
                placeholder="Enter your Lastname"
              ></v-text-field>
            </div>
            <div class="px-1">
              <!-- Username -->
              <v-text-field
                v-model="form_registor.username"
                :readonly="confirm"
                :rules="[required]"
                clearable
                label="Username"
                placeholder="Enter your Username"
              ></v-text-field>
              <!-- Password -->
              <v-text-field
                type="password"
                v-model="form_registor.password"
                :readonly="confirm"
                :rules="[required]"
                clearable
                label="Password"
                placeholder="Password"
              ></v-text-field>
              <!-- Email -->
              <v-text-field
                v-model="form_registor.email"
                :readonly="confirm"
                :rules="[Vemail]"
                clearable
                label="Email"
                placeholder="Enter your Email"
              ></v-text-field>
            </div>
            <br />
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" @click.native="dialog = false"
                >Disagree</v-btn
              >
              <v-btn
                color="success"
                :disabled="!registor"
                type="submit"
                variant="elevated"
                :loading="confirm"
                >Agree</v-btn
              >
            </v-card-actions>
          </v-form>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false,
    confirm: false,
    dialog: false,
    registor: false,
    // form registor
    form_registor: {
      name: null,
      lastname: null,
      username: null,
      email: null,
      password: null,
    },
  }),

  methods: {
    async onSubmit() {
      if (!this.form) return

      this.loading = true
      let obj = {
        username: this.email,
        password: this.password,
      }
      try {
        await this.$auth
          .loginWith('local', { data: obj })
          .then(async (res) => {})
      } catch (error) {
        console.log('error :', error)
      }

      this.loading = false
    },
    async onRegistor() {
      if (!this.registor) return
      this.confirm = true

      const { name, lastname, username, email, password } = this.form_registor
      let obj = {
        displayname: name + ' ' + lastname,
        username: username,
        password: password,
        email: email,
      }
      let api = await this.$axios.post(
        'http://192.168.1.200:8082/api/register',
        obj
      )
      console.log('api :', api)
      this.confirm = false
    },
    required(v) {
      return !!v || 'Field is required'
    },
    Vemail(v) {
      return (
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        'E-mail must be valid'
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.bg-app_food {
  background: $subMemo;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .centerPos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap-reverse;
  }
}
.fontTitle {
  color: $baseMemo;
}

.p_fadeIn {
  animation: fadeIn 1.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

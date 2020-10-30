<template>
  <v-container class="fill-height">
    <v-row class="fill-height"
           align="center"
           justify="center"
    >
      <v-col
          cols="12"
          sm="8"
          md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
              color="purple"
              dark
              flat
          >
            <v-toolbar-title class="font-weight-black">Register</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>

            <v-form>

              <v-text-field
                  outlined
                  rounded
                  label="Username"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="form.username"
                  :rules="[rules.required]"
                  :error-messages="error.username"
              ></v-text-field>


              <v-text-field
                  outlined
                  rounded
                  label="Email"
                  prepend-icon="mdi-email"
                  type="text"
                  v-model="form.email"
                  :rules="[rules.required]"
                  :error-messages="error.email"


              ></v-text-field>


              <v-text-field
                  outlined
                  rounded
                  label="First name"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="form.first_name"
                  :rules="[rules.required]"
                  :error-messages="error.first_name"


              ></v-text-field>


              <v-text-field
                  outlined
                  rounded
                  label="Last name"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="form.last_name"
                  :rules="[rules.required]"
                  :error-messages="error.last_name"


              ></v-text-field>


              <v-text-field
                  outlined
                  rounded
                  label="Password"
                  :type="show_password ? 'text' : 'password1'"
                  prepend-icon="mdi-lock"
                  :append-icon="show_password ? 'mdi-eye': 'mdi-eye-off'"
                  @click:append="show_password = !show_password"
                  @keypress.13="login"
                  v-model="form.password1"
                  :rules="[rules.required]"
                  :error-messages="error.password1"
              ></v-text-field>

              <v-text-field
                  outlined
                  rounded
                  label="ConfirmPassword"
                  :type="show_password ? 'text' : 'password2'"
                  prepend-icon="mdi-lock"
                  :append-icon="show_password ? 'mdi-eye': 'mdi-eye-off'"
                  @click:append="show_password = !show_password"
                  @keypress.13="login"
                  v-model="form.password2"
                  :rules="[rules.required]"
                  :error-messages="error.password2"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="container">
            <v-btn
                color="purple"
                x-large
                rounded
                block
                dark
                @click="registerUser"
            >
              Register
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import Base from "@/components/share/Base";
import PrimaryButton from "@/components/share/PrimaryButton";
import userprofile from "@/store/modules/userprofile";
import user from "@/store/modules/user";
export default {
  name: 'Register',
  extends: Base,
  component: {PrimaryButton},
  data() {
    return {
      show_password: false,
      form: {
        username: '',
        email: '@up.ac.th',
        first_name: '',
        last_name: '',
        password1: '',
        password2: '',
      },
      rules: {
        required: value => !!value || 'Required'
      }
    }
  },
  methods: {
    registerUser() {
      let check = Number(this.form.username);
       this.$store.dispatch('user/registerUser', {
        username: this.form.username,
        email: this.form.email,
        first_name: this.form.first_name,
        last_name: this.form.last_name,
        password1: this.form.password1,
        password2: this.form.password2,
        is_staff : isNaN(check)

      })
      this.$router.push({name: 'Login'})
    },

    // async login() {
    //       let data = await this.$store.dispatch('user/getUserToken', this.form)
    //       if (data) {
    //         await this.$router.push({name: 'Repair'})
    //       }
    //     },
  }
}


</script>
<style>
#login {
  width: 500px;
  border: 1px solid #CCCCCC;
  background-color: #FFFFFF;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}

#signup {
  width: 500px;
  border: 1px solid #CCCCCC;
  background-color: #FFFFFF;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>



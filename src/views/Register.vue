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
              color="black"
              dark
              flat
          >
            <v-toolbar-title>Register</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>

            <v-form>

<!--              <v-text-field-->
<!--                  outlined-->
<!--                  rounded-->
<!--                  label="Name"-->
<!--                  prepend-icon="mdi-account"-->
<!--                  type="text"-->
<!--                  v-model="form.name"-->
<!--                  :rules="[rules.required]"-->
<!--                  :error-messages="error.name"-->


<!--              ></v-text-field>-->

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
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="form.email"
                  :rules="[rules.required]"
                  :error-messages="error.email"


              ></v-text-field>




              <v-text-field
                  outlined
                  rounded
                  label="Password"
                  :type="show_password ? 'text' : 'password1'"
                  prepend-inner-icon="mdi-lock"
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
                  prepend-inner-icon="mdi-lock"
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
                          color="black"
                          x-large
                          rounded
                          block
                          dark
                          @click="registerUser"

                      >
                        Register
                      </v-btn>
                    </v-card-actions>

<!--          <v-card-actions class="container">-->
<!--            <v-btn-->
<!--                color="black"-->
<!--                x-large-->
<!--                rounded-->
<!--                block-->
<!--                dark-->
<!--                @click="signup"-->
<!--            >-->
<!--              Register-->
<!--            </v-btn>-->
<!--          </v-card-actions>-->


        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import Base from "@/components/share/Base";
import PrimaryButton from "@/components/share/PrimaryButton";

export default {
  name: 'Register',
  extends: Base,
  component: {PrimaryButton},
  data() {
    return {
      show_password: false,
      form: {
        // name: '',
        username: '6543210',
        email: '6543210@up.ac.th',
        password1: 'password_user',
        password2: 'password_user',
      },
      rules: {
        required: value => !!value || 'Required'
      }
    }
  },
  methods: {
    registerUser () {
      this.$store.dispatch('user/registerUser', {
        // name: this.name,
        email: this.form.email,
        username: this.form.username,
        password1: this.form.password1,
        password2: this.form.password2,
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



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
            <v-toolbar-title>Login</v-toolbar-title>
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
                  label="Password"
                  prepend-icon="mdi-lock"
                  type="show_password ? 'text' : 'password'"
                  :append-icon="show_password ? 'mdi-eye': 'mdi-eye-off'"
                  @click:append="show_password = !show_password"
                  @keypress.13="login"

                  v-model="form.password"
                  :rules="[rules.required]"


                  :error-messages="error.password"

              ></v-text-field>

              <!--                          <v-text-field-->
              <!--                              label="Login"-->
              <!--                              name="login"-->
              <!--                              prepend-icon="mdi-account"-->
              <!--                              type="text"-->
              <!--                          ></v-text-field>-->

              <!--                          <v-text-field-->
              <!--                              id="password"-->
              <!--                              label="Password"-->
              <!--                              name="password"-->
              <!--                              prepend-icon="mdi-lock"-->
              <!--                              type="password"-->
              <!--                          ></v-text-field>-->

            </v-form>
          </v-card-text>

          <v-card-actions class="container">
            <v-btn
                color="black"
                x-large
                rounded
                block
                dark
                @click="login"
            >
              Login
            </v-btn>
          </v-card-actions>

          <v-card-actions class="container">
            <v-btn
                color="black"
                x-large
                rounded
                block
                dark
                @click="$router.push({name:'Register'})"
            >
              Sign Up
            </v-btn>
          </v-card-actions>

<!--          <v-card-actions class="container">-->
<!--            <v-btn-->
<!--                color="black"-->
<!--                x-large-->
<!--                rounded-->
<!--                block-->
<!--                dark-->
<!--                @click="register"-->
<!--            >-->
<!--              Register-->
<!--            </v-btn>-->
<!--          </v-card-actions>-->


          <!--                    <v-card-actions>-->
          <!--                        <v-spacer></v-spacer>-->
          <!--                        <v-btn class="container" color="black" dark @click="$router.push({name : 'Repair'})">Login</v-btn>-->
          <!--                    </v-card-actions>-->
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import Base from "@/components/share/Base";
import PrimaryButton from "@/components/share/PrimaryButton";

export default {
  name: 'Login',
  extends: Base,
  component: {PrimaryButton},
  data() {
    return {
      show_password: false,
      form: {
        username: '60023180',
        password: 'password_user'
      },

      rules: {
        required: value => !!value || 'Required'
      }
    }
  },
  methods: {
    async login() {
      let data = await this.$store.dispatch('user/getUserToken', this.form)
      if (data) {
        let user = await this.$store.dispatch('user/getUser')
        console.log(user)
        if (user.groups[0].name === "admin") {
          await this.$router.push({name: 'Repair_Admin'})
        }else if (user.groups[0].name === "student"){
          await this.$router.push({name: 'Repair'})
        }else if (user.groups[0].name === "manager"){
          await this.$router.push({name: 'Status_M'})

        }
      }
    },

    async signup() {
      let user = await this.$store.dispatch('user/registerUser', this.form)
      // let user = await this.$router.push({name: 'Register'})
    }
    // login() {
    //     if(this.input.username !== "username" && this.input.password !== "password") {
    //         if(this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
    //             this.$emit("authenticated", true);
    //             this.$router.replace({ name: "secure" });
    //         } else {
    //             console.log("The username and / or password is incorrect");
    //         }
    //     } else {
    //         console.log("A username and password must be present");
    //     }
    // }
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

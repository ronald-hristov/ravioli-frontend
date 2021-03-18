<template>
  <div>
    <div id="nav">
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/signup">Signup</router-link>
    </div>

    <b-container>
      <b-row align-h="center">
        <b-col cols="6">
          <b-form @submit="onSubmit" v-if="show">
            <b-form-group id="input-group-name" label="Your Name:" label-for="form-name">
              <b-form-input
                  id="form-name"
                  v-model="form.name"
                  placeholder="Enter name"
                  required
              ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-email"
                label="Email address:"
                label-for="form-email"
            >
              <b-form-input
                  id="form-email"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter email"
                  required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-password" label="Password:" label-for="form-password">
              <b-form-input
                  id="form-password"
                  v-model="form.password"
                  placeholder="Enter Password"
                  type="password"
                  required
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Sign up</b-button>
          </b-form>
        </b-col>

      </b-row>
    </b-container>

  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
      form: {
        email: '',
        name: '',
        password: '',
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      axios.post('/api/user', this.form)
          .then(res => {
            this.$store.commit('login', res.data);
            this.$router.push('/');
          })
          .catch(err => {
            console.log(err)
          })
    }
  }
}
</script>

<style scoped>

</style>
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
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
            >
              <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter email"
                  required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
              <b-form-input
                  id="input-2"
                  v-model="form.name"
                  placeholder="Enter name"
                  required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Password:" label-for="input-2">
              <b-form-input
                  id="input-2"
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
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<style scoped>

</style>
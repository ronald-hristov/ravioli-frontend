<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="warning">
      <b-navbar-brand to="/">Ravioli</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-button variant="outline-light" class="my-2 my-sm-0" to="/create-post"><b-icon icon="plus-circle"></b-icon> Create</b-button>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login" v-if="!$store.getters.isAuthenticated"><b-icon icon="person" ></b-icon> Log in</b-nav-item>
          <b-nav-item @click="onLogout" v-if="$store.getters.isAuthenticated"><b-icon icon="person"></b-icon> Log out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Navbar",
  methods: {
    onLogout() {
      axios.get('/api/user/logout')
          .then(res => {
            this.$store.commit('clearUser')
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
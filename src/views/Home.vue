<template>
  <div class="home">
  <b-row v-for="post in posts">
    <b-col cols="12">
      <b-card
              :title="post.title"
              :img-src="post.image"
              img-alt="Image"
              img-left
              tag="article"
              img-width="200px"
              style="height: 200px"
              class="mb-3"
              cols="3"
      >
        <b-card-text>{{ post.content.slice(0, 200) }} ...</b-card-text>

          <b-button :to="'/article/' + post.id" variant="primary">Read more</b-button> &ensp;
          <b-button :to="'/article/' + post.id + '/edit'" variant="warning" v-if="userOwnsPost(post)">Edit</b-button> &ensp;
          <b-button @click="showModal(post)" variant="danger" v-if="userOwnsPost(post)">Delete</b-button>



        <template #footer>
          <p><small class="text-muted">date: {{ post.date }}</small></p>
          <p><small class="text-muted">by {{ post.author }}</small></p>
        </template>
      </b-card>
    </b-col>
  </b-row>
<!--        <b-card-group deck>-->

<!--        </b-card-group>-->


  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: 'Home',
  data() {
    return {
      posts: [],
    }
  },
  components: {},
  computed: {
  },
  methods: {
    userOwnsPost(post) {
      return this.$store.getters.isAuthenticated && this.$store.getters.getUser.id === post.authorId;

    },
    reloadData() {
      axios.get('/api/article')
          .then(res => {
            this.posts = res.data
          })
          .catch(err => {
            console.log(err)
          })
    },
    showModal(post) {
      this.$bvModal.msgBoxConfirm('Are you sure?', {
        title: 'Please Confirm Deletion',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
          .then(value => {
            if (value) {
              axios.delete('/api/article/' + post.id)
                  .then(res => {
                    this.reloadData()
                  })
                  .catch(err => {
                    console.log(err)
                  })
            }
          })
          .catch(err => {
            // An error occurred
          })
    }
  },
  created() {
    this.reloadData()
  }
}
</script>

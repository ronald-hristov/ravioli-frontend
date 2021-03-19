<template>
  <div>
    <b-container>
      <b-row align-h="center">
        <b-col cols="6">
          <h1>Edit Post</h1>
          <b-form @submit="onSubmit" v-if="show">
            <b-form-group
                id="input-group-1"
                label="Title:"
                label-for="input-1"
            >
              <b-form-input
                  id="input-1"
                  v-model="form.title"
                  placeholder="Enter title"
                  required
              ></b-form-input>
            </b-form-group>

            <b-form-group
                label="Post Content"
                label-for="textarea-formatter"
                class="mb-4"
            >
              <b-form-textarea
                  id="textarea-formatter"
                  v-model="form.content"
                  placeholder="Post content"
              ></b-form-textarea>
            </b-form-group>

            <b-form-file
                v-model="file"
                :state="Boolean(file)"
                accept="image/jpeg, image/png, image/gif"
                placeholder="Choose a new cover image or drop it here..."
                drop-placeholder="Drop file here..."
                class="mb-4"
            ></b-form-file>

            <b-button type="submit" variant="primary">Edit</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditPost",
  data() {
    return {
      form: {
        title: '',
        content: '',
        // file: '',
      },
      file: null,
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()

      let formData = new FormData();
      formData.append('file', this.file);
      formData.append('title', this.form.title)
      formData.append('content', this.form.content)


      axios.post('/api/article/' + this.$route.params.id, formData,
          {headers: {'Content-Type': 'multipart/form-data'}}
      )
          .then(res => {
            this.$router.push('/');
          })
          .catch(err => {
            console.log(err)
          })
    }
  },
  created() {
    if (!this.$store.getters.isAuthenticated) {
      this.$router.push('/login');
    }

    axios.get('/api/article/' + this.$route.params.id)
        .then(res => {
          let post = res.data
          this.form.title = post.title
          this.form.content = post.content
          this.file = post.image
        })
        .catch(err => {
          console.log(err)
        })
  }
}
</script>

<style scoped>

</style>
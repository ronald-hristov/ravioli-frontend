<template>
  <div>
    <b-container>
      <b-row align-h="center">
        <b-col cols="6">
          <h1>New Post</h1>
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
                v-model="form.file"
                :state="Boolean(form.file)"
                placeholder="Choose a cover image or drop it here..."
                drop-placeholder="Drop file here..."
                class="mb-4"
            ></b-form-file>

            <b-button type="submit" variant="primary">Create</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  data() {
    return {
      form: {
        title: '',
        content: '',
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
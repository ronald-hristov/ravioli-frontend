<template>
  <div>
    <div style="position:relative;">
      <div class="bg-image"
           :style="{ backgroundImage: 'url(' + post.image + ')' }"
      >
      </div>
      <b-img :src="post.image" alt="Responsive image" height="200px" style="position: absolute; top: 0; left: 0"></b-img>
    </div>


    <h1>{{ post.title }}</h1>
    <div v-html="articleContent"></div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "ViewPost",
  data() {
    return {
      post: null
    }
  },
  computed: {
    articleContent: function() {
      return this.post.content.replace(/\n/g, '<br />')
    }
  },
  created() {
    axios.get('/api' + window.location.pathname)
        .then(res => {
          this.post = res.data
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
  }
}
</script>

<style scoped>
.bg-image {
  /* The image used */
  /*background-image: url("");*/

  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Full height */
  height: 200px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
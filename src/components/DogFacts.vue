<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="fetchData">Click Me!</button>
    <button @click="fetchImage">Click Me to see Image!</button>
    <img src="img" />
  </div>
</template>

<style></style>
<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      msg: '', // initialisieren Sie msg als leeren String
      img: ''
    }
  },
  methods: {
    fetchData() {
      axios
        .get('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
          // aktualisieren Sie den Wert von msg mit den empfangenen Daten
          this.msg = JSON.stringify(response.data)
        })
        .catch((err) => {
          console.error(err)
        })
    },
    fetchImage() {
      axios
        .get('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
          // aktualisieren Sie den Wert von msg mit den empfangenen Daten
          this.img = response.data.message
        })
        .catch((err) => {
          console.error(err)
        })
    },
    methodTest() {
      this.img = this.fetchImage()
    }
  }
}
</script>

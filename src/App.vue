<template>
  <div id="app">
    <div>
      <ul>
        <li v-for="notebook in notebooks" :key="notebook.id">
          <p>{{ notebook.title }}</p>
        </li>
      </ul>
    </div>

    <div>
      <button @click="addNote">add Note</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters("notebook", ["notebooks"])
  },
  methods: {
    ...mapMutations("notebook", ["addNote"])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

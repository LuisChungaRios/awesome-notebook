<template>
  <div id="app" class="container-fluid mt-3">
    <NoteComponent />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import NoteComponent from "./components/Note";
export default {
  name: "App",
  computed: {
    ...mapGetters("notebook", ["notebooks"])
  },
  methods: {
    ...mapMutations("notebook", ["addNote"])
  },
  components: {
    NoteComponent
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

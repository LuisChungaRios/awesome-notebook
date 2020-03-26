<template>
  <div id="app" class="m-0 p-0">
      <div>
       <Header />
      </div>
     <div class="container-fluid">
      <NoteComponent />
    </div>
    <div>
       <Footer />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Header from "./components/Header"
import Footer from "./components/Footer"
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
    Header,
    NoteComponent,
    Footer
    
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

<template>
  <div class="col-sm-12 col-md-4" v-html="highlightRenderText"></div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  name: "NoteRenderText",
  computed: {
    ...mapGetters("notebook", ["getRenderNotebookText"]),
    highlightRenderText() {
      return this.getRenderNotebookText;
    }
  }
};
</script>
<style>
code {
  display: block;
  /* height: auto; */
  padding: 1em;
  overflow-y: auto;
  overflow-x: hidden;
  color: #abb2bf !important;
  background: #282c34;
  text-align: left;
}
</style>

<template>
  <div class="col-sm-12 col-md-4" v-html="getRenderNotebookText"></div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  name: "NoteRenderText",
  computed: {
    ...mapGetters("notebook", ["getRenderNotebookText"])
  }
};
</script>

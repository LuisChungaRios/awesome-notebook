<template>
  <div class="col-sm-12 col-md-4">
    <textarea
      name=""
      id=""
      class="form-control"
      style="height:100%"
      v-model="text"
      @keyup="setContentNotebookSelected(text)"
    >
    </textarea>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  name: "NoteText",
  computed: {
    ...mapGetters("notebook", ["getSelectedNotebook"]),
    text: {
      get() {
        return this.getSelectedNotebook.content;
      },
      set(newValue) {
        this.setContentNotebookSelected(newValue);
      }
    }
  },
  methods: {
    ...mapMutations("notebook", ["setContentNotebookSelected"])
  }
};
</script>

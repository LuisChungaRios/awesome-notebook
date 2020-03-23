<template>
  <div class="col-sm-12 col-md-4 note-container">
    <div class="row mb-4">
      <div class="col-sm-4 col-md-4 offset-sm-4">
        <button class="btn btn-success btn-block" @click.prevent="addNote()">
          <b-icon icon="plus"></b-icon> Notes
        </button>
      </div>
    </div>
    <div class="container">
      <NoteListItem
        v-for="notebook in notebooks"
        :key="notebook.id"
        :notebook="notebook"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

import NoteListItem from "./NoteListItem";

export default {
  components: {
    NoteListItem
  },
  name: "NoteList",
  methods: {
    ...mapMutations("notebook", ["addNote"])
  },
  computed: {
    ...mapGetters("notebook", ["notebooks"])
  }
};
</script>
<style scoped>
.note-container {
  min-height: 100vh;
}

.note-list {
}
</style>

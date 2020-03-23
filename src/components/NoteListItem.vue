<template>
  <div class="row note-list mb-1">
    <div class="col-7" @click="changeSelectedNote(notebook)">
      <label v-if="!showInput" style="cursor:pointer">
        {{ notebook.title }}
      </label>
      <input v-else type="text" class="form-control" />
    </div>

    <div class="col-5 d-flex justify-content-around">
      <button class="btn">
        <b-icon icon="star" variant="warning"></b-icon>
      </button>
      <button v-if="!showInput" class="btn" @click="changeInput">
        <b-icon icon="pencil" variant="danger"></b-icon>
      </button>
      <button
        v-if="showInput"
        class="btn"
        @click="updateNotebookTitle(notebook)"
      >
        <b-icon icon="check-circle" variant="danger"></b-icon>
      </button>
      <button class="btn">
        <b-icon icon="trash-fill" variant="danger"></b-icon>
      </button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "NoteListItem",
  props: {
    notebook: {
      required: true,
      type: Object,
      default: () => ({
        title: "default title",
        id: null
      })
    }
  },
  data() {
    return {
      input: false
    };
  },
  computed: {
    showInput() {
      return this.input;
    }
  },
  methods: {
    ...mapMutations("notebook", ["setSelectedNote"]),
    changeInput() {
      this.input = !this.input;
    },
    changeSelectedNote(notebook) {
      return this.setSelectedNote(notebook);
    }
  }
};
</script>
<style></style>

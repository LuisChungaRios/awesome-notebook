<template>
  <div class="row note-list mb-1">
    <div class="col-7" @click="changeSelectedNote(notebook)">
      <label v-if="!showInput" @dblclick="changeInput" style="cursor:pointer">
        {{ notebook.title }}
      </label>
      <input
        v-else
        type="text"
        class="form-control"
        @keyup.enter="updateNotebookTitle(notebook)"
        v-model="newTitle"
      />
    </div>

    <div class="col-5 d-flex justify-content-around">
      <button class="btn" @click="changeFavouriteNote(notebook)">
        <b-icon
          :icon="notebook.favourite ? 'star-fill' : 'star'"
          variant="warning"
        ></b-icon>
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
      <button class="btn" @click="deleteNote(notebook.id)">
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
      input: false,
      newTitle: null
    };
  },
  computed: {
    showInput() {
      return this.input;
    }
  },
  methods: {
    ...mapMutations("notebook", [
      "setSelectedNote",
      "deleteNote",
      "updateTitle",
      "changeFavouriteNote"
    ]),
    changeInput() {
      this.input = !this.input;
      this.newTitle = this.notebook.title;
    },
    changeSelectedNote(notebook) {
      return this.setSelectedNote(notebook);
    },
    updateNotebookTitle(notebook) {
      this.input = false;
      notebook.title = this.newTitle;
      return this.updateTitle(notebook);
    }
  }
};
</script>
<style></style>

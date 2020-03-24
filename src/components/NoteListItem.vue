<template>
  <div class="row note-list mb-1">
    <div class="col-lg-7 p-0 border-5 bg-light border-aqua" @click="changeSelectedNote(notebook)">
      <label v-if="!showInput" @dblclick="changeInput" style="cursor:pointer; font-size: 19.8px;">
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

    <div class="col-5 d-flex justify-content-around linea-1">
      <button class="btn" @click="changeFavouriteNote(notebook)">
        <b-icon
          :icon="notebook.favourite ? 'star-fill' : 'star'"
          variant="warning" 
        ></b-icon>
        
      </button>
      <button v-if="!showInput" class="btn" @click="changeInput">
        <i class="fas fa-pencil-alt" style="font-size: 18px; "></i>
      </button>
      <button
        v-if="showInput"
        class="btn"
        @click="updateNotebookTitle(notebook)"
      >
        <i class="fas fa-check-circle" style="font-size: 18px;"></i>
      </button>
      <button class="btn" @click="deleteNote(notebook.id)">
         <i class="fas fa-trash " style="font-size: 19px; color: warning;"></i>
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
<style>
.linea-1 button {
    
    color: #ffffff;
    background-color: #28a745;
    border: 1.5px solid transparent;  
    border-radius: 0.5rem;
    border-color: #28a745;
    padding: 0px 10px;
    
}
.linea-1 button:hover {
  background-color:#ffffff ;
  color: #28a745;
}
</style>

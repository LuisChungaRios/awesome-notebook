const mutations = {
  addNote(state) {
    const id = state.notebooks.length + 1;
    state.notebooks.push({
      title: `my note title ${id}`,
      content: "my awesome note",
      favourite: false,
      created_at: Date.now(),
      id
    });
  },
  deleteNote(state, notebook_id) {
    const indexDelete = state.notebooks.findIndex(
      notebook => notebook.id === notebook_id
    );

    if (indexDelete != -1) {
      state.notebooks.splice(indexDelete, 1);
    }
  },
  setSelectedNote(state, noteSelected) {
    state.selectedNote = noteSelected;
  },
  setContentNotebookSelected(state, contentNotebookSelected) {
    const index = state.notebooks.findIndex(
      notebook => notebook.id === state.selectedNote.id
    );

    state.notebooks[index].content = contentNotebookSelected;
  },
  updateTitle(state, { title, id }) {
    const index = state.notebooks.findIndex(notebook => notebook.id === id);

    state.notebooks[index].title = title;
  },
  changeFavouriteNote(state, { id }) {
    const index = state.notebooks.findIndex(notebook => notebook.id === id);

    state.notebooks[index].favourite = !state.notebooks[index].favourite;
  }
};

export default mutations;

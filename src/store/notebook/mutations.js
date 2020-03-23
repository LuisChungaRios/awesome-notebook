const mutations = {
  addNote(state) {
    const id = state.notebooks.length + 1;
    state.notebooks.push({
      title: `my note title ${id}`,
      content: "my awesome note",
      favorite: false,
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
  }
};

export default mutations;

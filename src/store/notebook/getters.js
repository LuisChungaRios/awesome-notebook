import marked from "marked";
const getters = {
  notebooks(state) {
    return state.notebooks.sort((a, b) => a.id > b.id);
  },
  getSelectedNotebook(state) {
    return state.selectedNote;
  },
  getRenderNotebookText(state) {
    if (state.selectedNote) {
      return marked(state.selectedNote.content);
    }
  }
};
export default getters;

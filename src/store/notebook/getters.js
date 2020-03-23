import marked from "marked";
const getters = {
  notebooks(state) {
    return state.notebooks.sort((a, b) => {
      if (a.favourite) {
        return -1;
      }
      return 1;
    });
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

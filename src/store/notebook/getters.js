const getters = {
  notebooks(state) {
    return state.notebooks.sort((a, b) => a.id > b.id);
  }
};
export default getters;

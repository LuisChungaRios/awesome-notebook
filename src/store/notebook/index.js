import actions from "./actions";
import getters from "./getters";
import state from "./state";
import mutations from "./mutations";

const namespaced = true;

const notebook = {
  actions,
  getters,
  state,
  mutations,
  namespaced
};

export default notebook;

import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

const markdown = new MarkdownIt({
  langPrefix: "language-",
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
  xhtmlOut: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (e) {
        console.log(e);
      }
    }

    return "";
  }
});
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
      return markdown.render(state.selectedNote.content);
    }
  }
};
export default getters;

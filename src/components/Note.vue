<template>
  <div class="row">
    <NoteList />
    <NoteText />
    <NoteRenderText />
  </div>
</template>
<script>
import NoteList from "./NoteList";
import NoteText from "./NoteText";
import NoteRenderText from "./NoteRenderText";

export default {
  components: {
    NoteList,
    NoteText,
    NoteRenderText
  },
  name: "Note"
};
</script>
<style></style>

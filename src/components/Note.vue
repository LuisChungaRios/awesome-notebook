<template>
  <div class="row">
    <NoteList />
    <div class="col-sm-12 col-md-4"></div>
    <div class="col-sm-12 col-md-4"></div>
  </div>
</template>
<script>
import NoteList from "./NoteList";
export default {
  components: {
    NoteList
  },
  name: "Note"
};
</script>
<style></style>

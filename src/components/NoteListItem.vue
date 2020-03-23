<template>
  <div class="row note-list mb-1">
    <div class="col-7">
      <label for=""> {{ notebook.title }} </label>
      <!-- <input type="text" class="form-control" /> -->
    </div>

    <div class="col-5 d-flex justify-content-around">
      <button class="btn">
        <b-icon icon="star" variant="warning"></b-icon>
      </button>
      <button class="btn">
        <b-icon icon="pencil" variant="danger"></b-icon>
      </button>
      <button class="btn">
        <b-icon icon="dash-square-fill" variant="danger"></b-icon>
      </button>
    </div>
  </div>
</template>
<script>
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
  }
};
</script>
<style></style>

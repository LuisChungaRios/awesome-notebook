<template>
  <div class="col-sm-12 col-md-4 note-container">
    <div class="row mb-4">
      <div class="col-sm-4 col-md-4 offset-sm-4">
        <button class="btn btn-success btn-block">
          <b-icon icon="plus"></b-icon> Notes
        </button>
      </div>
    </div>
    <div class="row note-list mb-1">
      <div class="col-7">
        <label for="">Item 1</label>
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
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.note-container {
  min-height: 100vh;
}

.note-list {
}
</style>

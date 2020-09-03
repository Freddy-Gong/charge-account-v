<template>
  <div class="nav-wrapper">
    <div class="content">Money</div>
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Money",
});
</script>

<style lang='scss'scoped>
.nav-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.content {
  flex-grow: 1;
}
</style>
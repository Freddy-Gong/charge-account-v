<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Nav from "@/components/Nav.vue";
export default Vue.extend({
  name: "layout",
});
</script>

<style scoped>
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
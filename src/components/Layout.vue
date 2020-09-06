<template>
  <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Nav from "@/components/Nav.vue";
export default Vue.extend({
  props: ["classPrefix"],
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
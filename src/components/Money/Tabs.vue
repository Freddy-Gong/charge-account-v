<template>
  <ul class="tabs">
    <li
      v-for="data in dataSource"
      :key="data.value"
      @click="selected(data)"
      :class="{selected:data.value===type,[classPrefix+'-item']:classPrefix}"
    >{{data.text}}</li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Tabs extends Vue {
  @Prop({ required: true, type: Array }) dataSource!: {
    text: string;
    value: string;
  }[];
  @Prop(String) readonly type!: string;
  @Prop(String) classPrefix?: string;
  selected(data: { text: string; value: string }) {
    this.$emit("update:type", data.value);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>
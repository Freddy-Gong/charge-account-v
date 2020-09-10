<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="typeList" :type.sync="type" />
    <Tabs class-prefix="interval" :data-source="intervalList" :type.sync="interval" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Tabs from "@/components/Money/Tabs.vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { Tabs },
})
export default class Statistic extends Vue {
  type = "-";
  intervalList = [
    { text: "按天", value: "day" },
    { text: "按周", value: "week" },
    { text: "按月", value: "month" },
  ];
  interval = "day";
  typeList = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" },
  ];
}
</script>

<style lang="scss" scoped>
::v-deep .type-item {
  background: white;
  &.selected {
    background: #c4c4c4;
  }
}
</style>
<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="typeList" :type.sync="type" />
    <Tabs class-prefix="interval" :data-source="intervalList" :type.sync="interval" />
    <ol>
      <li v-for="(group,index) in result" :key="index">
        <h3>{{group.title}}</h3>
        <ol>
          <li v-for="item in group.item" :key="item.id">
            <span>{{tagString(item.tags)}}</span>
            <span>{{item.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Tabs from "@/components/Money/Tabs.vue";
import { Component } from "vue-property-decorator";
import store from "@/store/index2";

@Component({
  components: { Tabs },
})
export default class Statistic extends Vue {
  tagString(tags: Tag[]) {
    return tags.length === 0 ? "无" : tags.join(",");
  }
  get recordList() {
    return store.recordList;
  }

  get result() {
    const { recordList } = this;
    type Item = RecordItem[];
    const hashTable: {
      [key: string]: { title: string; item: Item };
    } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [data, time] = recordList[i].createAt!.split("T");
      hashTable[data] = hashTable[data] || { title: data, item: [] }; //初始化
      hashTable[data].item.push(recordList[i]);
    }
    return hashTable;
  }

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

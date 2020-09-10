<template>
  <Layout class-prefix="layout">
    {{record}}
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Types :value.sync="record.types" />
    <Notes filedName="备注" @update:value="onUpdateNotes" placeholder="在这里输入备注" />
    <Tags />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component } from "vue-property-decorator";
import model from "@/models/model.ts";
import store from "@/store/index2.ts";

export type RecordItem = {
  tags: string[];
  notes: string;
  types: "-" | "+";
  amount: number;
  createAt?: Date | undefined; //类型这里除了可以写一个类型，还可以写一个类（构造函数）
};
const version = window.localStorage.getItem("version") || "0";
if (version === "0.0.1") {
  //数据库升级，数据迁移
  store.recordList.forEach((record) => {
    record.createAt = new Date(2020, 0, 1);
  });
  // 保存数据
  model.save();
}
window.localStorage.setItem("version", "0.0.2");

@Component({
  components: { Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  recordList = store.recordList;
  record: RecordItem = { tags: [], notes: "", types: "-", amount: 0 };
  onUpdateNotes(note: string) {
    this.record.notes = note;
  }
  saveRecord() {
    store.createRecord(this.record); //record是一个对象，这样赋值传的是一个引用。
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
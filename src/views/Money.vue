<template>
  <Layout class-prefix="layout">
    {{record}}
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Types :value.sync="record.types" />
    <Notes @update:value="onUpdateNotes" />
    <Tags :data-source="tags" v-on:update:data-source="tags=$event" @update:value="onUpdateTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component, Watch } from "vue-property-decorator";

const version = window.localStorage.getItem("version") || "0";
const recordList: Record[] = JSON.parse(
  window.localStorage.getItem("recordList") || "[]"
);

if (version === "0.0.1") {
  //数据库升级，数据迁移
  recordList.forEach((record) => {
    record.createAt = new Date(2020, 0, 1);
  });
  // 保存数据
  window.localStorage.setItem("recordList", JSON.stringify(recordList));
}

window.localStorage.setItem("version", "0.0.2");

type Record = {
  tags: string[];
  notes: string;
  types: "-" | "+";
  amount: number;
  createAt?: Date | undefined; //类型这里除了可以写一个类型，还可以写一个类（构造函数）
};

@Component({
  components: { Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  recordList: Record[] = JSON.parse(
    window.localStorage.getItem("recordList") || "[]"
  );
  record: Record = { tags: [], notes: "", types: "-", amount: 0 };
  onUpdateTags(tags: string[]) {
    this.record.tags = tags;
  }
  onUpdateNotes(note: string) {
    this.record.notes = note;
  }
  saveRecord() {
    const deepClone: Record = JSON.parse(JSON.stringify(this.record));
    //深拷贝
    deepClone.createAt = new Date();
    this.recordList.push(deepClone); //record是一个对象，这样赋值传的是一个引用。
  }
  @Watch("recordList")
  onUpdateRecord() {
    window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<template>
  <Layout>
    <div>
      <Icon name="right" />
      <span>编辑标签</span>
    </div>
    <Notes filedName="标签名" placeholder="在这里输入签名" />
  </Layout>
</template>

<script lang="ts">
import tagModel from "@/models/tagListModels";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    tagModel.fetch();
    const tags = tagModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style scoped>
</style>
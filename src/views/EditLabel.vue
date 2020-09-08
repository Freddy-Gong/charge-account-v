<template>
  <Layout>
    <div class="navBar">
      <Icon name="right" />
      <span class="title">编辑标签</span>
      <Icon name="right" />
    </div>

    <Notes filedName="备注" place-holder="在这里输入备注" />
    <Button>删除标签</Button>
  </Layout>
</template>

<script lang="ts">
import tagModel from "@/models/tagListModels";
import Vue from "vue";
import Notes from "@/components/Money/Notes.vue";
import { Component } from "vue-property-decorator";
import Button from "@/components/Button.vue";

@Component({
  components: { Notes, Button },
})
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

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
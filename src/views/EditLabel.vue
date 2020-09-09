<template>
  <Layout>
    <div class="navBar">
      <Icon name="right" @click.native="goback" />
      <span class="title">编辑标签</span>
      <Icon name="right" />
    </div>

    <Notes :value="this.tag.name" @update:value="updateTag" filedName="备注" place-holder="在这里输入备注" />
    <Button @click.native="deleteTag">删除标签</Button>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Notes from "@/components/Money/Notes.vue";
import { Component } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import store from "@/store/index2.ts";

@Component({
  components: { Notes, Button },
})
export default class EditLabel extends Vue {
  tag = store.find(this.$route.params.id);
  created() {
    if (!this.tag) {
      this.$router.replace("/404");
    }
  }
  updateTag(name: string) {
    if (this.tag) {
      store.updateTag(this.tag.id, name);
    }
  }
  deleteTag() {
    if (this.tag) {
      if (store.removeTag(this.tag.id)) {
        this.$router.back();
      } else {
        window.alert("伤处失败");
      }
    }
  }
  goback() {
    this.$router.back();
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
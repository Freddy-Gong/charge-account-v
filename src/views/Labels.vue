<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icon name="right" />
      </router-link>
    </div>
    <div>
      <button class="createTag" @click="addTag">新增标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagsList from "@/models/tagListModels.ts";

tagsList.fetch();

@Component
export default class Labels extends Vue {
  tags = tagsList.data;
  addTag() {
    const name = window.prompt("标签名");
    if (name) {
      try {
        tagsList.create(name);
        window.alert("chenggonog");
      } catch (error) {
        if (error.message === "duplicated") {
          window.alert("标签重复");
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
.createTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>
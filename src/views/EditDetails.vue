<template>
  <div class="page">
    <top-bar :link="link">
      编辑标签
      <button class="ok" @click="ok">
        <Icon name="ok" />
      </button>
    </top-bar>
    <tag-data :value="tag.name">
      <Icon :name="tag.icon" />
    </tag-data>
    <button class="deleteTag">删 除 标 签</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import TopBar from "@/components/TopBar.vue";
import IconList from "@/components/IconList.vue";
import tagListModel from "@/models/tagListModel";
import TagData from "@/components/TagData.vue";
@Component({
  components: { TopBar, TagData, IconList },
})
export default class EditDetails extends Vue {
  tag?: TagItem = undefined;
  link: string = "/edit";
  iconList: string[] = [
    "shopping",
    "food",
    "transportation",
    "entertainment",
    "medicalSupplies",
    "others",
  ];
  ok() {}
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      console.log(tag);
      this.tag = tag;
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.page {
  background-color: $color-background;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex-wrap: wrap;
  position: relative;
  .ok {
    position: absolute;
    top: 5px;
    right: 8px;
    border: none;
    background: transparent;
    color: $color-Default;
  }
  .deleteTag {
    margin: 10px 40px;
    border: none;
    background-color: $color-labelSelected;
    border-radius: 5px;
    min-height: 40px;
    font-size: 16px;
    color: white;
  }
}
</style>
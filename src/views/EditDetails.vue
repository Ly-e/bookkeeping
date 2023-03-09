<template>
  <div class="page">
    <top-bar :link="link">
      编辑标签
      <button class="ok" @click="ok">
        <Icon name="ok" />
      </button>
    </top-bar>
    <tag-data
      :value="tag.name"
      :iconName="tag.icon"
      @update:value="updateTagName"
    >
    </tag-data>
    <icon-list :dataSource="iconList" @update:value="onUpdateIcon" />
    <button class="removeTag" @click="removeTag">删 除 标 签</button>
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
  iconName: string = "";
  iconList: string[] = [
    "shopping",
    "food",
    "transportation",
    "entertainment",
    "medicalSupplies",
    "others",
  ];
  name: string = "";
  icon: string = "";
  updateTagName(name: string) {
    this.name = name;
  }
  onUpdateIcon(icon: string) {
    this.icon = icon;
  }
  ok() {
    if (this.tag) {
      if (this.name && this.icon) {
        const message = tagListModel.update(this.tag.id, this.name, this.icon);
        if (message === "success") {
          window.alert("保存成功");
          this.$router.back();
        } else if (message === "duplicated") {
          window.alert("标签名重复了，请重新输入！");
        } else if (message === "not found") {
          window.alert("编辑的标签不存在！");
        }
      }
    }
  }
  removeTag() {
    if (this.tag) {
      const message = tagListModel.remove(this.tag.id);
      if (message === true) {
        window.alert("删除成功");
        this.$router.back();
      }
    }
  }
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      this.tag = tag;
      this.name = tag.name;
      this.icon = tag.icon;
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
  .removeTag {
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
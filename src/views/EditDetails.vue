<template>
  <div class="page">
    <top-bar :link="link">
      编辑标签
      <button class="ok" @click="ok(id, name, icon)">
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
    <button class="removeTag" @click="remove">删 除 标 签</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import TopBar from "@/components/TopBar.vue";
import IconList from "@/components/IconList.vue";
import TagData from "@/components/TagData.vue";
import store from "@/store/index2";
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
  id: string = this.$route.params.id;
  name: string = "";
  icon: string = "";
  updateTagName(name: string) {
    this.name = name;
  }
  onUpdateIcon(icon: string) {
    this.icon = icon;
  }
  ok(id: string, name: string, icon: string) {
    if (this.tag) {
      id = this.id;
      name = this.name;
      icon = this.icon;
      if (store.updateTag(id, name, icon) === "success") {
        this.$router.back();
      }
    }
  }
  remove() {
    if (this.tag) {
      if (store.removeTag(this.tag.id)) {
        window.alert("删除成功");
        this.$router.back();
      } else {
        window.alert("删除失败");
      }
    }
  }
  created() {
    const id = this.$route.params.id;
    const tag = store.findTag(id);
    this.tag = tag;
    this.name = tag.name;
    this.icon = tag.icon;
    if (!tag) {
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
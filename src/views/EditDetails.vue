<template>
  <div class="page">
    <top-bar :link="link">
      编辑标签
      <button class="ok" @click="ok(id, name, icon)">
        <Icon name="ok" />
      </button>
    </top-bar>
    <tag-data
      :value="currentTag.name"
      :iconName="currentTag.icon"
      @update:value="updateTagName"
    >
    </tag-data>
    <icon-list :dataSource="iconList" @update:value="onUpdateIcon" />
    <button class="removeTag" @click="remove">删 除 标 签</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import TopBar from "@/components/TopBar.vue";
import IconList from "@/components/IconList.vue";
import TagData from "@/components/TagData.vue";
import iconList from "@/constans/iconList";
@Component({
  components: { TopBar, TagData, IconList },
})
export default class EditDetails extends Vue {
  get currentTag() {
    return this.$store.state.currentTag;
  }
  link: string = "/edit";
  iconName: string = "";
  iconList = iconList;
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
    if (this.currentTag) {
      id = this.id;
      name = this.name;
      icon = this.icon;
      this.$store.commit("updateTag", { id, name, icon });
    }
  }
  remove() {
    if (this.currentTag) {
      this.$store.commit("removeTag", this.currentTag.id);
    }
  }
  created() {
    this.$store.commit("fetchTags");
    const id = this.$route.params.id;
    this.$store.commit("setCurrentTag", id);
    this.name = this.currentTag.name;
    this.icon = this.currentTag.icon;
    if (!this.currentTag) {
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
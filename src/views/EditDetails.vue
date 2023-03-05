<template>
  <div class="page">
    <top-bar :link="link">
      编辑标签
      <button class="ok" @click="editTag">
        <Icon name="ok" />
      </button>
    </top-bar>
    <div class="tagData">
      <div class="tagName">
        <span>标签名称</span>
        <input
          type="text"
          v-model="value"
          @update:value="onUpdateTagName"
          placeholder="请输入标签名称"
        />
      </div>
      <div class="tagIcon">
        <span>标签图标</span>
        <div class="output"></div>
      </div>
    </div>
    <icon-list :dataSource="iconList" @update:value="onUpdateIcon" />
    <button class="deleteTag">删 除 标 签</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import TopBar from "@/components/TopBar.vue";
import IconList from "@/components/IconList.vue";
import tagListModel from "@/models/tagListModel";
@Component({
  components: { TopBar, IconList },
})
export default class EditDetails extends Vue {
  link: string = "/edit";
  tags = tagListModel.fetch();
  value: string = "";
  icon: string = "";
  iconList: string[] = [
    "shopping",
    "food",
    "transportation",
    "entertainment",
    "medicalSupplies",
    "others",
  ];
  onUpdateIcon(icon: string) {
    this.icon = icon;
  }
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
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
  .tagData {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba($color-shadow, 0.3);
    margin-top: 20px;
    margin-left: 7px;
    margin-right: 7px;
    .tagName {
      display: flex;
      align-items: center;
      border-bottom: 1px solid $color-line;
      margin-left: 14px;
      > input {
        flex: 1;
        border: none;
        margin-left: 4px;
        min-height: 54px;
        margin-top: 3px;
      }
      input::placeholder {
        font-size: 14px;
        color: $color-lightFont;
      }
    }
    .tagIcon {
      display: flex;
      min-height: 54px;
      align-items: center;
      margin-left: 14px;
      .output {
        flex: 1;
        margin-left: 4px;
        min-height: 54px;
        margin-top: 3px;
        height: 54px;
        line-height: 54px;
        font-size: 14px;
        color: $color-lightFont;
      }
    }
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
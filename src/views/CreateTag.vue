<template>
  <div class="page">
    <top-bar :link="link">
      新增标签
      <button class="ok" @click="createTag">
        <Icon name="ok" />
      </button>
    </top-bar>
    <div class="tagData">
      <div class="input-wrapper">
        <span>标签名称</span>
        <input
          type="text"
          v-model="value"
          @update:value="onUpdateTagName"
          placeholder="请输入标签名称"
        />
      </div>
      <div class="output-wrapper">
        <span>标签图标</span>
        <div class="output">
          {{ output }}
        </div>
      </div>
    </div>
    <IconList :dataSource="iconList" @update:value="onUpdateIcon" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import TopBar from "@/components/TopBar.vue";
import IconList from "@/components/IconList.vue";
import tagListModel from "@/models/tagListModel";

tagListModel.fetch();
@Component({
  components: { TopBar, IconList },
})
export default class CreateTag extends Vue {
  tags = tagListModel.data;
  link: string = "/labeldetails";
  output: string = "请选择标签图标";
  iconList: string[] = [
    "shopping",
    "food",
    "transportation",
    "entertainment",
    "medicalSupplies",
    "others",
  ];
  value: string = "";
  @Watch("value")
  onNotesValueChanged(value: string) {
    this.$emit("update:vlaue", value);
  }
  onUpdateTagName(name: string) {
    console.log(name);
  }
  icon: string = "";
  onUpdateIcon(icon: string) {
    this.icon = icon;
  }

  createTag() {
    const name = this.value;
    const icon = this.icon;
    if (name && icon) {
      const message = tagListModel.create(name, icon);
      if (message === "duplicated") {
        window.alert("标签名重复了，请重新输入！");
      } else if (message === "success") {
        window.alert("添加成功！");
        this.$router.push("/labeldetails");
      }
    } else if (!name) {
      window.alert("请输入标签名！");
    } else if (icon === "") {
      window.alert("请选择标签图标！");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.page {
  background: $color-background;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
    .input-wrapper {
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
    .output-wrapper {
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
}
</style>
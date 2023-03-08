<template>
  <div class="tagData">
    <div class="tagName">
      <span>标签名称</span>
      <input
        type="text"
        :value="value"
        @input="onValueChanged($event.target.value)"
        placeholder="请输入标签名称"
      />
    </div>
    <div class="tagIcon">
      <span>标签图标</span>
      <div class="output">
        <div class="tagsIcon">
          <Icon :name="iconName" />
        </div>
        <span class="right"> =></span>
        <div class="tagsIcon">
          <Icon :name="icon" />
        </div>
      </div>
    </div>
    <icon-list :dataSource="iconList" @update:value="onUpdateIcon" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import IconList from "@/components/IconList.vue";
import tagListModel from "@/models/tagListModel";
@Component({
  components: { IconList },
})
export default class TagData extends Vue {
  @Prop({ default: "" }) readonly value!: string;
  @Prop() readonly tag!: TagItem;
  @Prop({ default: "" }) readonly iconName!: string;
  icon: string = "";
  iconList: string[] = [
    "shopping",
    "food",
    "transportation",
    "entertainment",
    "medicalSupplies",
    "others",
  ];
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
  onUpdateIcon(icon: string) {
    this.icon = icon;
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
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
      margin-left: 16px;
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
    border-bottom: 1px solid $color-line;
    $icon-h: 25px;
    $tags-h: 45px;
    .output {
      display: flex;
      flex: 1;
      margin-left: 4px;
      min-height: 54px;
      margin-top: 3px;
      height: 54px;
      line-height: 54px;
      font-size: 14px;
      color: $color-lightFont;
      .right {
        margin-left: 6px;
      }
      .tagsIcon {
        margin-top: 3px;
        margin-left: 5px;
        background-color: $color-labelBackground;
        border-radius: 50%;
        height: $tags-h;
        width: $tags-h;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon {
          width: $icon-h;
          height: $icon-h;
        }
      }
    }
  }
}
</style>
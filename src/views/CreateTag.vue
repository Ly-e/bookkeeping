<template>
  <div class="page">
    <top-bar :link="link">
      新增标签
      <button class="ok">
        <Icon name="ok" />
      </button>
    </top-bar>
    <div class="tagData">
      <div class="input-wrapper">
        <span>标签名称</span>
        <input type="text" placeholder="请输入标签名称" />
      </div>
      <div class="output-wrapper">
        <span>标签图标</span>
        <div class="output">
          {{ output }}
        </div>
      </div>
    </div>
    <IconList :dataSource="tagsList" />
    <button class="deleteTag">删 除 标 签</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import TopBar from "@/components/TopBar.vue";
import IconList from "@/components/IconList.vue";
@Component({
  components: { TopBar, IconList },
})
export default class CreateTag extends Vue {
  link: string = "/labeldetails";
  output: string = "请选择标签图标";
  tagsList = [
    {
      name: "购物消费",
      icon: "shopping",
      link: "/labelstatistics",
    },
    {
      name: "美食餐饮",
      icon: "food",
      link: "/labelstatistics",
    },
    {
      name: "交通出行",
      icon: "transportation",
      link: "/labelstatistics",
    },
    {
      name: "休闲娱乐",
      icon: "entertainment",
      link: "/labelstatistics",
    },
    {
      name: "医疗健康",
      icon: "medicalSupplies",
      link: "/labelstatistics",
    },
    {
      name: "其他",
      icon: "others",
      link: "/labelstatistics",
    },
  ];
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
  .deleteTag {
    margin: 10px 30px;
    border: none;
    background-color: $color-labelSelected;
    border-radius: 5px;
    min-height: 40px;
    font-size: 16px;
    color: white;
  }
}
</style>
<template>
  <div class="tagsBar">
    <ul class="tags">
      <li>
        <div class="tagsIcon">
          <Icon name="others" />
        </div>
        <p>其他</p>
      </li>
      <li>
        <div class="tagsIcon">
          <Icon name="shopping" />
        </div>
        <p>购物消费</p>
      </li>
      <li>
        <div class="tagsIcon">
          <Icon name="food" />
        </div>
        <p>美食餐饮</p>
      </li>
      <li>
        <div class="tagsIcon">
          <Icon name="transportation" />
        </div>
        <p>交通出行</p>
      </li>
      <li>
        <div class="tagsIcon">
          <Icon name="entertainment" />
        </div>
        <p>休闲娱乐</p>
      </li>
      <li>
        <div class="tagsIcon">
          <Icon name="medicalSupplies" />
        </div>
        <p>医疗健康</p>
      </li>
      <li class="addTag">
        <button class="tagsIcon addButton">
          <Icon name="keepone" />
        </button>
        <p>新增</p>
      </li>
    </ul>
    <div class="space"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tagsBar {
  flex-grow: 1;
  overflow: auto;
  .tags {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    margin-top: 15px;
    > li {
      $tags-h: 45px;
      $icon-h: 20px;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 20%;
      height: 20%;
      color: $color-lightFont;
      .tagsIcon {
        background-color: $color-labelBackground;
        border-radius: 50%;
        height: $tags-h;
        width: $tags-h;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .icon {
        width: $icon-h;
        height: $icon-h;
      }
    }
    .addButton {
      font-size: 12px;
      background: transparent;
      border: none;
    }
  }
}
</style>
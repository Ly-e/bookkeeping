<template>
  <div class="tagsBar">
    <ul class="tags">
      <li
        v-for="(item, index) in dataSource"
        :key="index"
        :class="{ selected: selectedTags.indexOf(index) >= 0 }"
        @click="select(index)"
      >
        <div class="tagsIcon">
          <Icon :name="`${item.icon}`" />
        </div>
        {{ item.name }}
      </li>
      <li>
        <div class="addTag">
          <button class="tagsIcon addButton">
            <Icon name="keepone" />
          </button>
        </div>
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
export default class TagsBar extends Vue {
  @Prop(Array) dataSource: [] | undefined;
  selectedTags: Array<any> = [];
  select(tag: object) {
    this.selectedTags.push(tag);
  }
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
      &.selected {
        .tagsIcon {
          background-color: $color-labelSelected;
        }
        .icon {
          color: white;
        }
      }
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
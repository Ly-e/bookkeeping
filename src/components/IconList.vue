<template>
  <div class="iconList-wrapper">
    <ul class="iconList">
      <li
        v-for="(item, index) in dataSource"
        :key="index"
        :class="{ selected: selectedTags.indexOf(item) >= 0 }"
        @click="toggle(item)"
      >
        <div class="tagsIcon">
          <Icon :name="`${item}`" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class IconList extends Vue {
  @Prop(Array) readonly dataSource: [] | undefined;
  selectedTags: Array<any> = [];
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:value", this.selectedTags);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.iconList-wrapper {
  overflow: auto;
  margin: 5px 7px;
  background-color: white;
  border-radius: 5px;
  .iconList {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    margin-top: 5px;
    > li {
      $tags-h: 45px;
      $icon-h: 25px;
      padding-top: 10px;
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
  }
}
</style>
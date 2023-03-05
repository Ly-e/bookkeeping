<template>
  <div class="tagsList">
    <router-link
      :to="`${item.link}`"
      class="tags-wrapper"
      v-for="(item, index) in dataSource"
      :key="index"
    >
      <div class="icon-wrapper">
        <Icon :name="`${item.icon}`" />
      </div>
      <span class="name">{{ item.name }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class TagsList extends Vue {
  @Prop(Array) readonly dataSource: [] | undefined;
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
$icon-width: 24px;
$icon-height: 24px;
.tagsList {
  flex: 1;
  margin-top: 20px;
  .tags-wrapper {
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: white;
    margin-bottom: 7px;
    box-shadow: 0 0 5px rgba($color-shadow, 0.3);
    margin-bottom: 10px;
    .icon-wrapper {
      border-radius: 50%;
      background-color: $color-labelBackground;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 7px 14px;
      .icon {
        width: $icon-width;
        height: $icon-height;
        margin: 8px;
      }
    }
    .name {
      margin-left: 10px;
      font-size: 16px;
    }
  }
}
</style>
<template>
  <div class="top-wrapper">
    <router-link :to="`${link}`">
      <Icon name="back" />
    </router-link>
    <span class="text"><slot /></span>
    <div></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class TopBar extends Vue {
  @Prop(String) readonly link: "" | undefined;
}
</script>

<style lang="scss" scoped>
.top-wrapper {
  height: 36px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon {
    width: 20px;
    height: 20px;
    margin-top: 2px;
    margin-left: 5px;
  }
}
</style>
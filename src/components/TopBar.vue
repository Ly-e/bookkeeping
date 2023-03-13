<template>
  <div class="top-wrapper">
    <button class="backButton" @click="back">
      <Icon name="back" />
    </button>

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
  back() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.top-wrapper {
  height: 36px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    border: none;
    background-color: transparent;
  }
  .icon {
    width: 20px;
    height: 20px;
    margin-top: 2px;
    margin-left: 10px;
  }
}
</style>
<template>
  <div class="overview">
    <div class="type">
      <span>周支出</span>
      <div>0.00</div>
    </div>
    <div class="type">
      <span>周收入</span>
      <div>0.00</div>
    </div>
    <div class="type">
      <span>周结余</span>
      <div>0.00</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class OverviewBar extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.overview {
  display: flex;
  justify-content: space-between;
  margin-right: 7px;
  margin-left: 7px;
  margin-top: 20px;
  color: white;
  background: $color-labelSelected;
  border-radius: 5px;
  .type {
    font-size: 12px;
    width: 33.333%;
    text-align: center;
    margin: 12px 0;
  }
}
</style>
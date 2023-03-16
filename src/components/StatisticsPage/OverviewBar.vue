<template>
  <div class="overview">
    <div class="type">
      <span>今日支出</span>
      <div>￥{{ expenditure }}</div>
    </div>
    <div class="type">
      <span>今日收入</span>
      <div>￥{{ income }}</div>
    </div>
    <div class="type">
      <span>日结余</span>
      <div>￥{{ balance }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class OverviewBar extends Vue {
  @Prop() dataSource!: { income: number; expenditure: number };
  income = this.dataSource.income;
  expenditure = this.dataSource.expenditure;
  balance = this.income - this.expenditure;
}
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
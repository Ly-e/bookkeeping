<template>
  <div class="proportions-wrapper">
    <div class="information">
      <span>支出占比</span>
    </div>
    <div class="summaryGraph">111</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import TabsComponent from "../TabsComponent.vue";

@Component({
  components: { TabsComponent },
})
export default class Proportions extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.proportions-wrapper {
  margin-right: 7px;
  margin-left: 7px;
  background-color: white;
  border-radius: 5px;
  .information {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 5px;
  }
  .summaryGraph {
    border: 1px solid red;
    height: 195px;
  }
}
</style>
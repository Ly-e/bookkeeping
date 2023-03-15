<template>
  <div class="proportions-wrapper">
    <div class="information">
      <span>支出占比</span>
      <tabs-component
        class-prefix="recordType"
        :value.sync="recordType"
        :dataSource="recordTypeList"
      />
    </div>
    <div class="summaryGraph">111</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import TabsComponent from "../TabsComponent.vue";
import recordTypeList from "@/constans/recordTypeList";
@Component({
  components: { TabsComponent },
})
export default class Proportions extends Vue {
  recordType = "-";
  recordTypeList = recordTypeList;
}
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
  ::v-deep .tabs-wrapper {
    background-color: transparent;
  }
  ::v-deep ul {
    height: 20px;
    width: 100px;
    font-size: 8px;
    background-color: $color-labelBackground;
    border-radius: 5px;
    li {
      padding-top: 9px;
      height: 20px;
      &.selected {
        color: $color-highlightRed;
      }
    }
  }
  .summaryGraph {
    border: 1px solid red;
    height: 195px;
  }
}
</style>
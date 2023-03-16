<template>
  <div class="page">
    <statistics-content />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import weekIntervalList from "@/constans/weekIntervalList";
import statisticsTypeList from "@/constans/statisticsTypeList";
import StatisticsContent from "@/components/StatisticsPage/StatisticsContent.vue";
@Component({
  components: { StatisticsContent },
})
export default class extends Vue {
  type = "week";
  topContent = statisticsTypeList;
  interval = "thisWeek";
  intervalArray = weekIntervalList;
  back() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $color-background;
  ::v-deep .type-tabs-item {
    &.selected {
      color: white;
      background-color: $color-labelSelected;
      border-radius: 5px 10px 5px 10px;
    }
  }
  ::v-deep .interval-tabs-item {
    &.selected {
      color: $color-highlightRed;
      border-bottom: 2px solid $color-labelSelected;
    }
  }
}
</style>
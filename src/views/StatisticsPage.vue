<template>
  <div class="page">
    <tabs-component
      class-prefix="type"
      :value.sync="type"
      :dataSource="topContent"
    >
      <button class="backButton" @click="back">
        <Icon name="back" />
      </button>
    </tabs-component>

    <tabs-component
      classPrefix="interval"
      :value.sync="interval"
      :dataSource="intervalArray"
    >
    </tabs-component>
    <overview-bar />
    <statistics-content />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import OverviewBar from "@/components/StatisticsPage/OverviewBar.vue";
import TabsComponent from "@/components/TabsComponent.vue";
import weekIntervalList from "@/constans/weekIntervalList";
import statisticsTypeList from "@/constans/statisticsTypeList";
import StatisticsContent from "@/components/StatisticsPage/StatisticsContent.vue";
@Component({
  components: { OverviewBar, TabsComponent, StatisticsContent },
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
  height: 100vh;
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
<template>
  <PageLayout class="page">
    <div class="title">
      <h2 class="text">简粉记账</h2>
      <span class="notes">记录点滴日常</span>
    </div>
    <OverviewBar :dataSource="dataSource" />
  </PageLayout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import OverviewBar from "@/components/StatisticsPage/OverviewBar.vue";
import dayjs from "dayjs";
import clone from "@/lib/clone";
import recordTypeList from "@/constans/recordTypeList";
@Component({
  components: { OverviewBar },
})
export default class Index extends Vue {
  dataSource = { income: 0, expenditure: 0 };
  recordTypeList = recordTypeList;
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  getResult(recordType: string) {
    const { recordList } = this;
    let total;
    const today = new Date();
    if (recordList) {
      const new2List = clone(recordList)
        .filter((r) => r.type === recordType)
        .filter((r) => dayjs(r.createdAt).isSame(dayjs(today), "day"));
      const amountList = new2List.map((r) => r.amount);
      total = amountList.reduce((sum, item) => sum + item, 0);
    } else {
      total = 0;
    }
    return total;
  }
  beforeCreate() {
    this.$store.commit("fetchRecords");
  }
  created() {
    this.dataSource.income = this.getResult("+");
    this.dataSource.expenditure = this.getResult("-");
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.page {
  background-color: $color-background;
  .title {
    margin-left: 10px;
    color: $color-title;
    display: flex;
    flex-direction: column;
    .text {
      font-size: 28px;
    }
    .notes {
      font-size: 14px;
    }
  }
}
</style>
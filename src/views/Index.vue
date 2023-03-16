<template>
  <PageLayout>
    <OverviewBar :dataSource="dataSource" />
    <Proportions />
  </PageLayout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Proportions from "@/components/StatisticsPage/Proportions.vue";
import OverviewBar from "@/components/StatisticsPage/OverviewBar.vue";
import dayjs from "dayjs";
import clone from "@/lib/clone";
import recordTypeList from "@/constans/recordTypeList";
@Component({
  components: { Proportions, OverviewBar },
})
export default class Index extends Vue {
  dataSource = { income: 0, expenditure: 0 };
  recordTypeList = recordTypeList;
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  getResult(recordType: string) {
    const { recordList } = this;
    const today = new Date();
    const new2List = clone(recordList)
      .filter((r) => r.type === recordType)
      .filter((r) => dayjs(r.createdAt).isSame(dayjs(today), "day"));
    const amountList = new2List.map((r) => r.amount);
    const total = amountList.reduce((sum, item) => sum + item);
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
</style>
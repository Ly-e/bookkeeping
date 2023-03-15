<template>
  <div>
    <Proportions> </Proportions>
    <ResultList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Proportions from "@/components/StatisticsPage/Proportions.vue";
import ResultList from "@/components/StatisticsPage/ResultList.vue";
import TabsComponent from "@/components/TabsComponent.vue";
import { Component } from "vue-property-decorator";
import recordTypeList from "@/constans/recordTypeList";
@Component({
  components: { Proportions, ResultList, TabsComponent },
})
export default class extends Vue {
  recordType = "-";
  recordTypeList = recordTypeList;
}
</script>

<style lang="scss" scoped>
</style>
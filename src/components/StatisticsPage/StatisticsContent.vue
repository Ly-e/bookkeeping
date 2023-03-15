<template>
  <div>
    <tabs-component :dataSource="title">
      <button class="backButton" @click="back">
        <Icon name="back" />
      </button>
    </tabs-component>
    <ResultList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ResultList from "@/components/StatisticsPage/ResultList.vue";
import TabsComponent from "@/components/TabsComponent.vue";
import { Component } from "vue-property-decorator";
import recordTypeList from "@/constans/recordTypeList";
@Component({
  components: { ResultList, TabsComponent },
})
export default class extends Vue {
  title = [{ text: "统计", value: "statistics" }];
  recordType = "-";
  recordTypeList = recordTypeList;
  back() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
</style>
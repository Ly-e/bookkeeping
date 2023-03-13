<template>
  <div class="page">
    <top-bar :value.sync="type" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopBar from "@/components/StatisticsPage/TopBar.vue";
import { Component } from "vue-property-decorator";
@Component({
  components: { TopBar },
})
export default class extends Vue {
  type = "week";
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $color-background;
}
</style>
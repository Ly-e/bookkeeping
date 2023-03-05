<template>
  <div>labelStatistics.vue</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class TagsList extends Vue {
  @Prop(Array) readonly dataSource: [] | undefined;
}
</script>

<style lang="scss" scoped>
</style>
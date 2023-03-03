<template>
  <div class="page">
    <PageLayout>
      <top-bar/>
      <category-list/>
    </PageLayout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import TopBar from "@/components/DetailsPage/TopBar.vue";
import CategoryList from "@/components/DetailsPage/CategoryList.vue";

@Component({
  components: { TopBar, CategoryList },
})
export default class DetailsPage extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.page {
  background-color: $color-background;
}
</style>
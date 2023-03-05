<template>
  <div class="page">
    <PageLayout>
      <top-bar :link="link"> 标签 </top-bar>
      <category-list />
    </PageLayout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import TopBar from "@/components/TopBar.vue";
import CategoryList from "@/components/DetailsPage/CategoryList.vue";

@Component({
  components: { TopBar, CategoryList },
})
export default class DetailsPage extends Vue {
  link: string = "/index";
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.page {
  background-color: $color-background;
}
</style>
<template>
  <div class="page">
    <top-bar :link="link"> 编辑标签 </top-bar>
    <tags-list />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import TopBar from "@/components/TopBar.vue";
import TagsList from "@/components/LabelDetails/TagsList.vue";

@Component({
  components: { TopBar, TagsList },
})
export default class EditPage extends Vue {
  link: string = "/keepone";
  get tagList() {
    return this.$store.state.tagList;
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.page {
  background: $color-background;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100vh;
}
</style>
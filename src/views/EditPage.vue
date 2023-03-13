<template>
  <div class="page">
    <top-bar :link="link"> 编辑标签 </top-bar>
    <tags-list :data-source="tags" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import TopBar from "@/components/TopBar.vue";
import TagsList from "@/components/LabelDetails/TagsList.vue";
import store from "@/store/index2";
@Component({
  components: { TopBar, TagsList },
})
export default class EditPage extends Vue {
  link: string = "/keepone";
  tags = store.tagList;
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
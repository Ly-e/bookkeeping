<template>
  <div class="page">
    <top-bar :link="link"> 查看标签 </top-bar>
    <tags-list />
    <button class="createTag" @click="goCreateTag">新 增 标 签</button>
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
export default class LabelDetails extends Vue {
  link: string = "/details";
  goCreateTag() {
    this.$router.push("/createTag");
  }
  created() {
    this.$store.commit("fetchTags");
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
  .createTag {
    margin: 10px 30px;
    border: none;
    background-color: $color-labelSelected;
    border-radius: 5px;
    min-height: 40px;
    font-size: 16px;
    color: white;
  }
}
</style>
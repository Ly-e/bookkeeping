<template>
  <div class="page">
    <top-bar :link="link"> 按标签查看 </top-bar>
    <tags-list :data-source="tags" />
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
  tags = [
    {
      name: "购物消费",
      icon: "shopping",
      link: "/index",
    },
    {
      name: "美食餐饮",
      icon: "food",
      link: "/index",
    },
    {
      name: "交通出行",
      icon: "transportation",
      link: "/index",
    },
    {
      name: "休闲娱乐",
      icon: "entertainment",
      link: "/index",
    },
    {
      name: "医疗健康",
      icon: "medicalSupplies",
      link: "/index",
    },
    {
      name: "其他",
      icon: "others",
      link: "/index",
    },
  ];
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
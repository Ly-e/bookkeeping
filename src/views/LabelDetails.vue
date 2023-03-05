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
      link: "/labelstatistics",
    },
    {
      name: "美食餐饮",
      icon: "food",
      link: "/labelstatistics",
    },
    {
      name: "交通出行",
      icon: "transportation",
      link: "/labelstatistics",
    },
    {
      name: "休闲娱乐",
      icon: "entertainment",
      link: "/labelstatistics",
    },
    {
      name: "医疗健康",
      icon: "medicalSupplies",
      link: "/labelstatistics",
    },
    {
      name: "其他",
      icon: "others",
      link: "/labelstatistics",
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
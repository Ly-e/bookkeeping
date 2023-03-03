<template>
  <div class="page">
    <top-bar />
    <tags-bar :data-source="tags" />
    <add-bar />
  </div>
</template>

<script>
import TopBar from "@/components/KeepOne/TopBar.vue";
import TagsBar from "@/components/KeepOne/TagsBar.vue";
import AddBar from "@/components/KeepOne/AddBar.vue";
export default {
  name: "KeepOne",
  components: { TopBar, TagsBar, AddBar },
  data() {
    return {
      tags: [
        {
          name: "其他",
          icon: "others",
        },
        {
          name: "购物消费",
          icon: "shopping",
        },
        {
          name: "美食餐饮",
          icon: "food",
        },
        {
          name: "交通出行",
          icon: "transportation",
        },
        {
          name: "休闲娱乐",
          icon: "entertainment",
        },
        {
          name: "医疗健康",
          icon: "medicalSupplies",
        },
      ],
    };
  },
};
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
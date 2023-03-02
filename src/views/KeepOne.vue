<template>
  <div class="page">
    <top-bar />
    <tags-bar />
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
<template>
  <div>
    <top-bar :link="link"> 编辑标签 </top-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import TopBar from "@/components/TopBar.vue";
import tagListModel from "@/models/tagListModel";
@Component({
  components: { TopBar },
})
export default class EditDetails extends Vue {
  link: string = "/edit";
  tags = tagListModel.fetch();
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
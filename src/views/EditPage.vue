<template>
  <div>
    <top-bar> 编辑标签 </top-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import TopBar from "@/components/TopBar.vue";
@Component({
  components: { TopBar },
})
export default class EditPage extends Vue {}
</script>

<style lang="scss" scoped>
</style>
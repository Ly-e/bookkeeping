<template>
  <div class="page">
    <top-bar :value.sync="record.type" />
    <tags-bar @update:value="onUpdateTags" />
    <add-bar
      @update:notes="onUpdateNotes"
      @update:value="onUpdateAmount"
      @submit="saveRecord"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopBar from "@/components/KeepOne/TopBar.vue";
import TagsBar from "@/components/KeepOne/TagsBar.vue";
import AddBar from "@/components/KeepOne/AddBar.vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { TopBar, TagsBar, AddBar },
})
export default class KeepOne extends Vue {
  get tagList() {
    return this.$store.state.tagList;
  }
  get recordList() {
    return this.$store.state.recordList;
  }
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateTags(tags: []) {
    this.record.tags = tags;
  }
  onUpdateNotes(notes: string) {
    this.record.notes = notes;
  }
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
  saveRecord() {
    this.$store.commit("createRecord", this.record);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $color-background;
}
</style>
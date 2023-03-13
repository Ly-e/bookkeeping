<template>
  <div class="page">
    <top-bar :value.sync="record.type" />
    <tags-bar :data-source="tags" @update:value="onUpdateTags" />
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
import store from "@/store/index2";

@Component({
  components: { TopBar, TagsBar, AddBar },
})
export default class KeepOne extends Vue {
  tags = store.tagList;
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  recordList = store.recordList;

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
    store.createRecord(this.record);
  }
}
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
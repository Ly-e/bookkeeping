<template>
  <div class="page">
    {{ recordsList }}
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
import { Component, Prop, Watch } from "vue-property-decorator";
import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";

const recordsList = recordListModel.fetch();
tagListModel.fetch();

@Component({
  components: { TopBar, TagsBar, AddBar },
})
export default class KeepOne extends Vue {
  tags = tagListModel.data;
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  recordsList: RecordItem[] = recordsList;

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
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordsList.push(record2);
  }
  @Watch("recordsList")
  onRecordsListChanged() {
    recordListModel.save(this.recordsList);
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
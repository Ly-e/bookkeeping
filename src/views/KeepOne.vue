<template>
  <div class="page">
    {{ record }}
    <top-bar :value.sync="record.type" />
    <tags-bar :data-source="tags" @update:value="onUpdateTags" />
    <add-bar @update:notes="onUpdateNotes" @update:value="onUpdateAmount" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopBar from "@/components/KeepOne/TopBar.vue";
import TagsBar from "@/components/KeepOne/TagsBar.vue";
import AddBar from "@/components/KeepOne/AddBar.vue";
import { Component, Prop } from "vue-property-decorator";

type Record = {
  tags: [];
  notes: string;
  type: string;
  amount: number;
};

@Component({
  components: { TopBar, TagsBar, AddBar },
})
export default class KeepOne extends Vue {
  tags = [
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
  ];
  record: Record = { tags: [], notes: "", type: "-", amount: 0 };

  onUpdateTags(tags: []) {
    console.log(tags);
    this.record.tags = tags;
  }
  onUpdateNotes(notes: string) {
    this.record.notes = notes;
  }
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
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
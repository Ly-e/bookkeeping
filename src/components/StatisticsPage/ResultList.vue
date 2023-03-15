<template>
  <ul class="resultList">
    <li v-for="(group, index) in result" :key="index">
      <span class="title">{{ group.title }}</span>
      <ul class="group-wrapper">
        <li v-for="item in group.items" :key="item.id">
          <div class="tags">
            <div class="tagIcon">
              <Icon :name="tagIcon(item.tags)" />
            </div>
            <div class="tagName">
              {{ tagName(item.tags) }}
            </div>
            <div class="notes">{{ item.notes }}</div>
          </div>
          <div class="money">￥{{ item.amount }}</div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class ResultList extends Vue {
  tagIcon(tags: TagItem[]) {
    return tags[0].icon;
  }
  tagName(tags: TagItem[]) {
    return tags[0].name;
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get result() {
    const { recordList } = this;
    const hashTable: {
      [key: string]: { title: string; items: RecordItem[] };
    } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split("T");
      hashTable[date] = hashTable[date] || { title: date, items: [] };
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }
  beforeCreate() {
    this.$store.commit("fetchRecords");
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.resultList {
  margin-right: 7px;
  margin-left: 7px;
  border-radius: 5px;
  .resultItem {
    border: 1px solid red;
    background-color: white;
    margin-top: 8px;
    border-radius: 5px;
  }
  .title {
    color: $color-lightFont;
    font-size: 12px;
  }
  .group-wrapper {
    border-radius: 5px;
    background-color: white;
    > li {
      display: flex;
      border-bottom: 1px solid $color-line;
      height: 44px;
      align-items: center;
      justify-content: space-between;
      margin: 0 5px;
    }
    .tags {
      display: flex;
      $tags-h: 25px;
      .tagIcon {
        background-color: $color-labelBackground;
        border-radius: 50%;
        height: $tags-h;
        width: $tags-h;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 5px;
        .icon {
          width: 16px;
          height: 16px;
        }
      }
      .tagName {
        margin-left: 5px;
      }
      .notes {
        margin-left: 5px;
        color: $color-notes;
      }
    }
  }
}
</style>
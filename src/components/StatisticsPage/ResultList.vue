<template>
  <div class="resultList-wrapper">
    <tabs-component
      class="tabs"
      class-prefix="recordType"
      :value.sync="recordType"
      :dataSource="recordTypeList"
    />
    <ul class="resultList">
      <li v-for="(group, index) in result" :key="index">
        <div class="tips">
          <div class="title">{{ beautify(group.title) }}</div>
          <span class="title total">总计： ￥{{ group.total }} </span>
        </div>
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import dayjs from "dayjs";
import clone from "@/lib/clone";
import recordTypeList from "@/constans/recordTypeList";
import TabsComponent from "../TabsComponent.vue";
@Component({
  components: { TabsComponent },
})
export default class ResultList extends Vue {
  recordType = "-";
  recordTypeList = recordTypeList;
  tagIcon(tags: TagItem[]) {
    return tags[0].icon;
  }
  tagName(tags: TagItem[]) {
    return tags[0].name;
  }
  beautify(title: string) {
    const day = dayjs(title);
    const now = dayjs();
    if (day.isSame(now, "day")) {
      return "今天";
    } else if (day.isSame(now.subtract(1, "day"), "day")) {
      return "昨天";
    } else if (day.isSame(now.subtract(2, "day"), "day")) {
      return "前天";
    } else if (day.isSame(now, "year")) {
      return day.format("MM月D日");
    } else {
      return day.format("YYYY年MM月D日");
    }
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get result() {
    const { recordList } = this;
    const newList = clone(recordList)
      .filter((r) => r.type === this.recordType)
      .sort(
        (a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
      );
    if (recordList.length === 0) {
      return [];
    }
    type GroupedList = { title: string; total?: number; items: RecordItem[] }[];
    const groupedList: GroupedList = [
      {
        title: dayjs(newList[0].createdAt).format("YYYY-MM-DD"),
        items: [newList[0]],
      },
    ];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = groupedList[groupedList.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), "day")) {
        last.items.push(current);
      } else {
        groupedList.push({
          title: dayjs(current.createdAt).format("YYYY-MM-DD"),
          items: [current],
        });
      }
    }
    groupedList.map((group) => {
      group.total = group.items.reduce((sum, item) => sum + item.amount, 0);
    });
    return groupedList;
  }
  beforeCreate() {
    this.$store.commit("fetchRecords");
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.resultList-wrapper {
  background-color: $color-background;
  .tabs {
    margin-top: 10px;
    margin-right: 7px;
    margin-left: 7px;
    border-radius: 5px;
    ::v-deep .tabs-wrapper {
      background-color: transparent;
    }
    ::v-deep ul {
      height: 32px;
      width: 100px;
      background-color: $color-labelBackground;
      border-radius: 5px;
      li {
        height: 32px;
        &.selected {
          color: $color-highlightRed;
        }
      }
    }
  }
  .resultList {
    margin-right: 7px;
    margin-left: 7px;
    border-radius: 5px;
    .tips {
      display: flex;
      justify-content: space-between;
      background-color: $color-background;
    }
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
}
</style>
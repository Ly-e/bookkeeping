<template>
  <div class="topBar">
    <ul>
      <li>
        <button @click="back">
          <Icon name="back" />
        </button>
      </li>
      <li
        class="types"
        :class="value === 'week' && 'selected'"
        @click="selectType('week')"
      >
        <div>周统计</div>
      </li>
      <li
        class="types"
        :class="value === 'month' && 'selected'"
        @click="selectType('month')"
      >
        <div>月统计</div>
      </li>
      <li
        class="types"
        :class="value === 'year' && 'selected'"
        @click="selectType('year')"
      >
        <div>年统计</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class TopBar extends Vue {
  @Prop() readonly value!: string;
  selectType(type: string) {
    // type 只能是 'week'、'month'、'year'中的一个
    if (type !== "year" && type !== "month" && type !== "week") {
      throw new Error("type is unknown");
    }
    this.$emit("update:value", type);
  }
  back() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.topBar {
  display: flex;
  background-color: white;
  ul {
    display: flex;
    height: 36px;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    li {
      height: 36px;
      margin: 10px;
      text-align: center;
      padding-top: 6px;
    }
    .types {
      flex-grow: 1;
      height: 36px;
    }
    .selected {
      color: white;
      background-color: $color-topBarSelected;
      border-radius: 5px 10px 5px 10px;
    }
  }
  button {
    background: transparent;
    border: none;
    .icon {
      width: 20px;
      height: 20px;
      margin-top: 2px;
    }
  }
}
</style>
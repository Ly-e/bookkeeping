<template>
  <div class="tabs-wrapper">
    <ul class="tabs">
      <li><slot /></li>
      <li
        class="types"
        :class="liClass(item)"
        v-for="(item, index) in dataSource"
        :key="index"
        @click="select(item)"
      >
        <div>{{ item.text }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

type DataSourceItem = { text: string; value: string };

@Component
export default class TabsComponent extends Vue {
  @Prop({ required: true, type: Array }) readonly dataSource!: {
    text: string;
    value: string;
  }[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;

  liClass(item: DataSourceItem) {
    return {
      [this.classPrefix + "-tabs-item"]: this.classPrefix,
      selected: item.value === this.value,
    };
  }

  select(item: DataSourceItem) {
    this.$emit("update:value", item.value);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tabs-wrapper {
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
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
        :class="value === '-' && 'selected'"
        @click="selectType('-')"
      >
        <div>支出</div>
      </li>
      <li
        class="types"
        :class="value === '+' && 'selected'"
        @click="selectType('+')"
      >
        <div>收入</div>
      </li>
      <li>
        <button class="edit">
          <router-link to="/edit"> 编辑 </router-link>
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Types extends Vue {
  @Prop() readonly value!: string;
  back() {
    this.$router.back();
  }
  selectType(type: string) {
    // type 只能是 '-'、'+'中的一个
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknown");
    }
    this.$emit("update:value", type);
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
      border-bottom: 2px solid $color-labelSelected;
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
  .edit {
    font-size: 8px;
    color: $color-lightFont;
  }
}
</style>
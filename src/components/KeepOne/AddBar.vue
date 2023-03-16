<template>
  <div class="addPad">
    <label class="notes">
      <Icon name="remark" />
      <span class="name">备注</span>
      <input
        type="text"
        :value="notesValue"
        @input="onChange"
        placeholder="请输入备注"
      />
      <div class="output">{{ output }}</div>
    </label>
    <div class="numberPad">
      <div class="number">
        <button @click="inputContent">1</button>
        <button @click="inputContent">2</button>
        <button @click="inputContent">3</button>
        <button @click="inputContent">4</button>
        <button @click="inputContent">5</button>
        <button @click="inputContent">6</button>
        <button @click="inputContent">7</button>
        <button @click="inputContent">8</button>
        <button @click="inputContent">9</button>
        <button @click="clear">清空</button>
        <button @click="inputContent">0</button>
        <button @click="inputContent">.</button>
      </div>
      <div class="opretion">
        <button @click="backspace">
          <Icon name="backspace" />
        </button>
        <button class="ok" @click="ok">确定</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class AddBar extends Vue {
  //numberPad
  output: string = "0";
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent!;
    if (this.output.length === 10) {
      return;
    }
    if (this.output === "0") {
      if ("0123456789".indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    } else if (this.output.indexOf(".") >= 0 && input === ".") {
      return;
    } else {
      this.output += input;
    }
  }
  backspace() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
    }
  }
  clear() {
    this.output = "0";
  }
  calculate() {}
  ok() {
    this.$emit("update:value", this.output);
    this.$emit("submit", this.output);
    window.alert("记账成功！");
    this.output = "0";
  }

  //notes
  notesValue: string = "";
  @Watch("notesValue")
  onNotesValueChanged(value: string) {
    this.$emit("update:notes", value);
  }

  onChange(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.notesValue = input.value;
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.addPad {
  .notes {
    background-color: white;
    display: block;
    font-size: 12px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    box-shadow: inset 0 -5px 5px -5px fade-out($color-shadow, 0.3);
    .name {
      padding-right: 16px;
      padding-left: 4px;
    }
    .icon {
      width: 14px;
      height: 14px;
    }
  }
  input {
    flex-grow: 3;
    background: transparent;
    border: none;
  }
  .output {
    height: 30px;
    margin: 16px;
    font-size: 18px;
    font-family: Consolas, monospace;
    color: $color-highlightRed;
  }
  .numberPad {
    display: flex;
    flex-wrap: wrap;
    .number {
      width: 75%;
      button {
        width: 33.3333%;
        height: 60px;
        background-color: white;
        border: 1px solid $color-background;
      }
    }
    .opretion {
      width: 25%;
      button {
        width: 100%;
        height: 60px;
        background-color: white;
        border: 1px solid $color-background;
      }
      .ok {
        background-color: $color-OK;
        height: 180px;
      }
    }
    .icon {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
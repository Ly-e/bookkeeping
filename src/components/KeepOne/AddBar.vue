<template>
  <div class="addPad">
    <label class="notes">
      <Icon name="remark" />
      <span class="name">备注</span>
      <input type="text" placeholder="请输入备注" />
      <div class="output">100</div>
    </label>
    <div class="numberPad">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button class="big">
        <Icon name="backspace" />
      </button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>-</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>x</button>
      <button>÷</button>
      <button>%</button>
      <button>0</button>
      <button>.</button>
      <button class="big ok">确定</button>
    </div>
  </div>
</template>

<script>
export default {};
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
    height: 40px;
    flex-grow: 3;
    background: transparent;
    border: none;
  }
  .output {
    margin: 16px;
    font-size: 18px;
    font-family: Consolas, monospace;
    color: $color-highlightRed;
  }
  .numberPad {
    display: flex;
    flex-wrap: wrap;
    button {
      width: 20%;
      height: 60px;
      background-color: white;
      border: 1px solid $color-background;
    }
    .icon {
      width: 20px;
      height: 20px;
    }
    .big {
      width: 40%;
    }
    .ok {
      background-color: $color-OK;
    }
  }
}
</style>
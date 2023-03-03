<template>
  <div class="top-wrapper">
    <router-link to="/index">
      <Icon name="back" />
    </router-link>
    <span class="text">账单明细</span>
    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top-wrapper {
  height: 36px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon {
    width: 20px;
    height: 20px;
    margin-top: 2px;
    margin-left: 5px;
  }
}
</style>
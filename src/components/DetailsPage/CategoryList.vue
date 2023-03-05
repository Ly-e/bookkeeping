<template>
  <div class="categoryList">
    <router-link to="/labeldetails">
      <div class="categories">
        <span class="name">查看标签</span>
        <Icon name="right" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.categoryList {
  margin-top: 20px;
  .categories {
    margin-right: 7px;
    margin-left: 7px;
    background: white;
    min-height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba($color-shadow, 0.3);
    margin-bottom: 10px;
  }
  .name {
    margin-left: 14px;
    font-size: 16px;
  }
  .icon {
    margin-right: 16px;
    width: 25px;
    height: 25px;
    color: $color-lightFont;
  }
}
</style>
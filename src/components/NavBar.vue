<template>
    <nav>
      <router-link to="/details" class="item" active-class="selected">
        <Icon name="details"/>
        明细
      </router-link> 
      <router-link to="/keepone" class="item" active-class="selected">
        <div class="keepOne-wrapper">
          <Icon class="keepOne" name="keepone" />
        </div>
        <p class="keepOneText">记一笔</p>
      </router-link> 
      <router-link to="/statistics" class="item" active-class="selected">
        <Icon name="statistics"/>
        统计
      </router-link>
    </nav>
</template>

<script lang="ts">
    export default {
        name:'NavBar'
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav{
  display: flex;
  flex-direction: row;
   box-shadow: 0 0 5px rgba($color-labelBackground,0.3);
  > .item{
    width: 33.333333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 6px;
    font-size: 12px;
      .icon{
       width: 32px;
       height: 32px;
       }
       .keepOne-wrapper{
        background: #FFE7E5;
        border-radius: 50%;
        position:absolute;
        bottom: 24px;
        width: 72px;
        height: 72px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 5px rgba($color-labelBackground,0.3);
       }
      .keepOne{
        width: 56px;
        height: 56px;
      }
      .keepOneText{
        margin-top: 31px;
      }
  }
  > .item.selected{
        color:$color-labelSelected;
      }
}
</style>
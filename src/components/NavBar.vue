<template>
    <nav>
      <router-link to="/details" class="item">
        <Icon name="details"/>
        明细
      </router-link> 
      <router-link to="/keepone" class="item">
        <div class="keepOne-wrapper">
          <Icon class="keepOne" name="keepone" />
        </div>
        <p class="keepOneText">记一笔</p>
      </router-link> 
      <router-link to="/statistics" class="item">
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
nav{
  display: flex;
  flex-direction: row;

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
       }
      .keepOne{
        width: 56px;
        height: 56px;
      }
      .keepOneText{
        margin-top: 31px;
      }
  }
}
</style>
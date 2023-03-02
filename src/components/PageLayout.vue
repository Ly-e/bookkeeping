<template>
    <div class="layout-wrapper">
        <div class="content">
            <slot/>
        </div>
      <nav>
        <NavBar/>
      </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.layout-wrapper{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.content{
    overflow: auto;
    flex-grow: 1;
}
</style>
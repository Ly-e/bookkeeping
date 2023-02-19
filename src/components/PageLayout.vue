<template>
    <div class="nav-wrapper">
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
.nav-wrapper{
    height: 100vh;
    border:1px solid black;
    display: flex;
    flex-direction: column;
}
.content{
    border:1px solid green;
    overflow: auto;
    flex-grow: 1;
}
nav{
    border:1px solid red;
    
}
</style>
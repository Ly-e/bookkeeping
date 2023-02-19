<template>
    <PageLayout>
        <div>
            <button>返回</button>
            <ul class="types">
                <li class="selected">支出</li>
                <li>收入</li>
            </ul>
            <button>编辑</button>
        </div>
        <div class="tags">
            <ul class="currentTag">
                <li>其他</li>
                <li>购物消费</li>
                <li>美食餐饮</li>
                <li>交通通勤</li>
                <li>休闲娱乐</li>
                <li>医疗健康</li>
            </ul>
            <div class="newTag">
                <button>新增</button>
            </div>
        </div>
        <div>
            <div>
              <label class="notes">
                <span>备注</span>
                <input type="text">
              </label>
              <div class="output">100</div>
           </div>
           <div class="numberPad">
               <button>1</button>
               <button>2</button>
               <button>3</button>
               <button>退格</button>
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
               <button>确定</button>
           </div>
        </div>
    </PageLayout>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
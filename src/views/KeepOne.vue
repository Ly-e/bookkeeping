<template>
    <PageLayout>
        <div class="topBar">
            <ul>
                <li>
                    <button>
                       <Icon name="back"/>
                   </button>
                </li>
                <li class="selected types">
                    <div>支出</div>
                </li>
                <li class="types">
                    <div>收入</div>
                </li>
                <li><button class="edit">编辑</button></li>
            </ul>
            
        </div>
        <div>
            <ul class="tags">
                <li>
                    <div class="tagsIcon">
                        <Icon name="others"/>
                    </div>
                    <p>其他</p>
                </li>
                <li><div class="tagsIcon">
                        <Icon name="shopping"/>
                    </div>
                    <p>购物消费</p>
                </li>
                <li>
                    <div class="tagsIcon">
                        <Icon name="food"/>
                    </div>
                    <p>美食餐饮</p>
                </li>
                <li>
                    <div class="tagsIcon">
                        <Icon name="transportation"/>
                    </div>
                    <p>交通出行</p>
                </li>
                <li>
                    <div class="tagsIcon">
                        <Icon name="entertainment"/>
                    </div>
                    <p>休闲娱乐</p>
                </li>
                <li>
                    <div class="tagsIcon">
                        <Icon name="medicalSupplies"/>
                    </div>
                    <p>医疗健康</p>
                </li>
                <li class="addTag">
                      <button class="tagsIcon addButton">
                        <Icon name="keepone"/>
                      </button>
                      <p>新增</p>
                </li>
            </ul>
        </div>
        <div class="addPad">
              <label class="notes">
                <Icon name="remark" />
                <span class="name">备注</span>
                <input type="text" placeholder="请输入备注">
                <div class="output">100</div>
              </label>
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
@import "~@/assets/style/helper.scss";

    .tags{
          display: flex;
          flex-wrap: wrap;
          > li{
            $tags-h:45px;
            $icon-h:20px;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            margin-right:10px;
            margin-left: 10px;
            .tagsIcon{
            background-color: $color-labelBackground;
            border-radius: 50%;
            height: $tags-h;
            width: $tags-h;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            }
             .icon{
                width: $icon-h;
                height: $icon-h;
             }
          }
         .addTag{
         }
         .addButton{
            font-size: 12px;
            background: transparent;
            border: none;
         }
    }
    .addPad{
        .notes{
           background-color: white;
           display: block;
           font-size: 12px;
           padding-left: 16px;
           display: flex;
           align-items: center;
           .name{
            padding-right: 16px;
            padding-left: 4px;
           }
           .icon{
              width: 14px;
              height: 14px;
           }
        }
        input{
          height: 40px;
          flex-grow: 3;
          background: transparent;
          border: none;
        }
        .output{
           margin: 16px;
           font-size: 16px;
           font-family: Consolas,monospace;
           color:$color-highlightRed;
        }
        .numberPad{
           button{
            
           }
        }
    }
    .topBar{
        display: flex;
        background-color: white;
        ul{
            display: flex;
            height:36px;
            justify-content: space-between;
            align-items: center;
            flex-grow: 1;
            li{
                height: 36px;
                margin: 10px;
                text-align: center;
                padding-top: 6px;
            }
            .types{
                   flex-grow: 1;
                   height: 36px;
                }
            .selected{
                   border-bottom:2px solid $color-labelSelected;
                }
        }
        button{
            background: transparent;
            border:none;
            .icon{
                width: 20px;
                height: 20px;
                margin-top: 2px;
            }
        }
        .edit{
            font-size: 8px;
        }
    }
</style>
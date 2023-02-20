<template>
    <div class="page">
        <div class="topBar">
            <ul>
                <li>
                    <button>
                        <router-link to="/index">
                          <Icon name="back"/>
                        </router-link>
                   </button>
                </li>
                <li class="selected types">
                    <div>支出</div>
                </li>
                <li class="types">
                    <div>收入</div>
                </li>
                <li>
                    <button class="edit">
                        <router-link to="/edit">
                             编辑
                        </router-link>
                    </button>
                </li>
            </ul>
            
        </div>
        <div class="tagsBar">
            <ul class="tags">
                <li>
                    <div class="tagsIcon">
                        <Icon name="others"/>
                    </div>
                    <p>其他</p>
                </li>
                <li>
                    <div class="tagsIcon">
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
            <div class="space"></div>
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
               <button class="big">
                   <Icon name="backspace"/>
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
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

    .page{
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: $color-background;
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
            color:$color-lightFont;
        }
    }
    .tagsBar{
        flex-grow: 1;
        overflow: auto;
        .tags{
          display: flex;
          flex-wrap: wrap;
          padding: 5px;
          margin-top:15px;
          > li{
            $tags-h:45px;
            $icon-h:20px;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            width: 20%;
            height: 20%;
            color:$color-lightFont;
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
    }
    .addPad{
        .notes{
           background-color: white;
           display: block;
           font-size: 12px;
           padding-left: 16px;
           display: flex;
           align-items: center;
           box-shadow: inset 0 -5px 5px -5px fade-out($color-shadow,0.3);
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
           font-size: 18px;
           font-family: Consolas,monospace;
           color:$color-highlightRed;
        }
        .numberPad{
            display: flex;
            flex-wrap: wrap;
           button{
             width: 20%;
             height: 50px;
             background-color: white;
             border: 1px solid $color-background;
           }
           .icon{
              width: 20px;
              height: 20px;
           }
           .big{
                width: 40%;
             }
             .ok{
                background-color:$color-OK;
             }
        }
    }
    
    
</style>
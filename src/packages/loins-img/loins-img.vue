<template>
  <div>
      <div :style="{width:width,heigth:height}" class="loinsDisplay" v-for="item in imgItems">
        <div class="zoomImage" :style="{backgroundImage:item.url}" @click="handleClick(item)"></div>
      </div>
      <div class="dialog" v-show="showMask">
        <div class="dialog-container">
            <div class="dialog-title">{{title}}</div>
            <div class="content" >
              <img :src="url" style="max-width:100%;max-height:100%;"></img>
            </div>
            <div class="btns1">
              <div style="width:60px;heigth:50px；margin:0;padding:5px;" class="loinsDisplay"  @click="handleChange(item)" 
              v-for="item in imgItems">
                  <div class="zoomImage" :style="{backgroundImage:item.url}"></div>
              </div>
            </div>
            <div class="btns">
                <div class="confirm-btn" @click="confirmBtn">
                    关闭
                </div>
            </div>
            <div class="close-btn" @click="closeMask"><i class="iconfont icon-close"></i></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoinsImg',
  data() {
    return {
      
      showMask:false,
      url:''
    }
  },
  props: {
    title:{
      type: String,
      default: '图片预览'
    },
    imgItems:Array,
    width:String,
    height:String
  },
  methods: {
     handleClick(item) {
      this.showMask = true;
      this.url = item.url.split('(')[1].split(')')[0]
      this.$emit('click', item);
    },
    closeMask:function(){
      this.showMask = false;
    },
    confirmBtn:function(){
      this.showMask = false;
    },
    handleChange:function(item){
      this.url = item.url.split('(')[1].split(')')[0]
    }
  }
}
</script>

<style lang="scss" scoped>
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/ 
::-webkit-scrollbar {    
 width: 10px;     height: 10px;     background-color: #F5F5F5;
  }  
  /*定义滚动条轨道 内阴影+圆角*/ 
  ::-webkit-scrollbar-track {  
     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);     border-radius: 10px;     background-color: #F5F5F5; 
     }   
   /*定义滑块 内阴影+圆角*/ 
   ::-webkit-scrollbar-thumb {   
     border-radius: 10px;     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);     background-color: #ddd; 
     } 

  .zoomImage{
      width:100%;
      height:0;
      padding-bottom: 100%;
      overflow:hidden;
      background-position: center center;
      background-repeat: no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      background-size:cover;
       border: 1px #ddd solid;
  }
  .loinsDisplay{
       display: inline-block;
       margin :5px;
  }
   .dialog{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 9999;
        .dialog-container{
            width: 50%;
            height: calc(100vh - 200px);
            background: #ffffff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 8px;
            position: relative;
            .dialog-title{
                width: 100%;
                height: 60px;
                font-size: 18px;
                color: #696969;
                font-weight: 600;
                padding: 16px 50px 0 20px;
                box-sizing: border-box;
                border-bottom: 1px #ddd solid;
            }
            .content{
                width:50%;
                height: calc(100vh - 400px);
                text-align:center;
                display:table-cell;
                vertical-align:middle;
                font-size:0;
            }
            .inp{
                margin: 10px 0 0 20px;
                width: 200px;
                height: 40px;
                padding-left: 4px;
                border-radius: 4px;
                border: none;
                background: #efefef;
                outline: none;
                &:focus{
                    border: 1px solid #509EE3;
                }
            }
            .btns1{
                bottom: 60px;
                position: absolute;
                white-space: nowrap;
                width: 100%;
                overflow-y: hidden;
            }
            .btns{
                width: 100%;
                height: 60px;
                border-top: 1px #ddd solid;
                // line-height: 60px;
                position: absolute;
                bottom: 0;
                left: 0;
                text-align: right;
                padding: 0 16px;
                box-sizing: border-box;
                & > div{
                    display: inline-block;
                    color: #ffffff;
                    background: #f1f1f1;
                    border-radius: 8px;
                    /* margin-right: 12px; */
                    /* cursor: pointer; */
                    margin-top: 5px;
                    width: 60px;
                    /* height: 30px; */
                    text-align: center;
                    /* vertical-align: middle; */
                    /* padding-top: 10px; */
                    padding: 6px 10px;
                    margin-top: 15px;
                }
                .default-btn{
                    color: #787878;
                    &:hover{
                        color: #509EE3; 
                    }
                }
                .danger-btn{
                    background: #EF8C8C;
                    &:hover{
                        background: rgb(224, 135, 135);
                    }
                    &:active{
                        background: #EF8C8C;
                    }
                }
                .confirm-btn{
                    color: #ffffff;
                    background: #509EE3;
                    &:hover{
                        background: #6FB0EB;
                    }
                }
            }
            .close-btn{
                position: absolute;
                top: 16px;
                right: 16px;
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                font-size: 18px;
                cursor: pointer;
                &:hover{
                    font-weight: 600;
                }
            }
        }
    }
</style>



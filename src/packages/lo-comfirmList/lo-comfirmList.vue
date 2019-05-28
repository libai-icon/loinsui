<template>
  <div class="modal-mask" v-show="showType" @click="cancel">
        <div class="modal-confirm" @click="loStop">
            <div class="confirm-header">
                <div class="cancel"  @click="cancel">取消</div>
                <div> {{ title }}</div>
                <div class="submit" @click="submit">确定</div>
                <!-- <i class="iconfont icon-questioncircle"></i> {{ title }} -->
            </div>
            <div class="confirm-content">
                <div>
                    <div v-for="item in data" class="confirm-list" @click="listHandle($event,item)">
                        <div :key="item[key]" v-bind:class="item[key] == selectVal ?'selected':'' " :id="item[key]">{{item[value]}}</div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
  name: 'LoComfirmList',
  props: {
    title: {
        type:String,
        default:''
    },
    content: {
        type:String,
        default:''
    },
    show:{
        type:Boolean,
        default:false
    },
    dataList:{
        type:Array,
         default: function () {
                return [];
            }
    },
    defaultVal:{
        type:Object,
        default: function () {
                return {};
            }
    }
  },
  data(){
      return{
          showType:this.show,
          data:this.dataList,
          selectVal:null,
          selectVals:{},
          key:'id',
          value:'name'
      }
  },
  watch:{
      show:function (val) {
          this.showType = val;
      },
      dataList:function (val) {
          this.data = val;
      },
      defaultVal:function(val){
          this.selectVal = val.val[val.key],
          this.key = val.key;
          this.value = val.value;
      }
  },
 
  methods: {
    cancel:function(e){
        this.showType = false;
        this.$emit('revert',{type:false,selectVal:{}});
    },
    loStop:function(e){
       e.stopPropagation();
    },
    listHandle:function(e,item){
        e.stopPropagation();
        this.selectVal = item.id
        this.selectVals = item;
    },
    submit:function(e){
        e.stopPropagation();
        this.$emit('revert',{type:false,selectVal:this.selectVals})
    }
  }
}
</script>

<style lang="scss" scoped>
// @import url('./../../assets/iconfont.css');
 .modal-mask{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(55, 55, 55, 0.6);
    z-index: 100;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}
.modal-confirm{
  box-sizing: border-box;
  padding: 30px 40px;
  background-color: #fff;
  width: 100%;
//   height: 60%;
}
@media only screen and (max-width: 640px) {
 .modal-confirm{
    width: 100%;
    padding: 10px 20px; 
  }
}
.modal-enter, .modal-leave {
  opacity: 0;
}
.modal-transition{
  transition: all .3s ease;
}

.modal-enter .modal-confirm,
.modal-leave .modal-confirm {
  transform: scale(1.1);
}
.modal-transition{
  transition: all .3s ease;
}
.confirm-header{
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border-bottom: 1px #ddd solid;
    line-height: 26px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .cancel{
        color: #ddd;
    }
    .submit{
        color: rgb(64, 158, 255);
    }
}
.confirm-content{
    // display: flex;
    // flex-direction: column;
    // align-items: baseline;
    overflow-y: scroll;
   height: calc(100vh/2);  
}
.confirm-list{
    line-height: 26px;
    border-bottom: 1px #ddd solid;
    color: #808080;
}
.selected{
        background-color: aliceblue;
}
</style>


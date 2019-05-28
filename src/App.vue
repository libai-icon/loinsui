<template>
  <div id="app">
    <div class="moor-item">
      <label></label> 
      <moor-hello-world :color="color" :msg="msg"></moor-hello-world>
    </div>

    <!-- <div class="moor-item">
      <label>Button:</label> 
      <moor-button class="moor-btn" @click="onClick">确定</moor-button>
      <moor-button class="moor-btn" @click="onClick" bgcolor="#409eff" color="#fff">确定</moor-button>
      <moor-button class="moor-btn" @click="onClick" bgcolor="#67c23a" color="#fff">成功</moor-button>
      <moor-button class="moor-btn" @click="onClick" bgcolor="#e6a23c" color="#fff">警告</moor-button>
      <moor-button class="moor-btn" @click="onClick" bgcolor="#f56c6c" color="#fff">危险</moor-button>
    </div>
    
    <div class="moor-item">
      <label>Select: </label>
      <moor-select 
        class="moor-select"
        label="label"
        value="value"
        v-model="selectValue"
        :options="options">
      </moor-select>
    </div>

    <div class="moor-item">
      <label>Input: </label>
      <moor-input
      v-model="input1"
      placeholder="请输入信息">
      </moor-input>

      <moor-input
        v-model="input2"
        placeholder="请输入信息">
      </moor-input>

      <moor-input
        placeholder="输入框禁用"
        :disabled="inputDisabled">
      </moor-input>
    </div>

    <div class="moor-item">
      <label>Switch: </label>

      <moor-switch
      v-model="lightSwitch">开关(开):</moor-switch>

      <moor-switch
      v-model="switchLight">开关(关):</moor-switch>
    </div>
    
    <moor-button class="moor-btn" @click="handlePrint">打印选项值</moor-button>
    <loins-table :itemsTable="items" :itemsLable="lableItems" :loinsTableId="id"></loins-table>
    <loins-img @click="onClick" :width="width" :heigth="width" :imgItems = "imgItems" >
    </loins-img>
    <loins-search>高级查询</loins-search> -->
    <div class="view-content">
      <div class="content-name">
          按钮
      </div>
      <div style="width:100%">
        <lo-button  @click="onClick" bgcolor="#fff" color="#000">默认按钮</lo-button>
        <lo-button  @click="onClick" bgcolor="#409eff" color="#fff">主要按钮</lo-button>
        <lo-button  @click="onClick" bgcolor="#67c23a" color="#fff">成功按钮</lo-button>
        <lo-button  @click="onClick" bgcolor="#909399" color="#fff">信息按钮</lo-button>
        <lo-button  @click="onClick" bgcolor="#e6a23c" color="#fff">警告按钮</lo-button>
        <lo-button  @click="onClick" bgcolor="#f56c6c" color="#fff">危险按钮</lo-button>
      </div>
      <!-- <lo-selectTime></lo-selectTime> -->
      
    </div>
    <!-- <lo-alert :title="width" :content="msg" :show="showType"></lo-alert> -->
    <div class="view-content">
      <div class="content-name">
          弹框
      </div>
      <div style="width:100%">
        <lo-button  @click="showAlert" bgcolor="#409eff" color="#fff">弹框</lo-button>
        
      </div>
      <!-- <lo-selectTime></lo-selectTime> -->
      <lo-comfirmList :title="width" :dataList="dataList" :show="showType" :defaultVal="{key:'id',value:'name',val:{id:'1',name:'',key:'id'}}" @revert="revert"></lo-comfirmList>
    
    </div>
    <div class="view-content">
      <div class="content-name">
          时间
      </div>
      <div style="width:100%">
        <lo-selectTime ref="selectVal" type="datePicker"  @confirm="confirm" :default_startDate="startDate" :default_endDate="endDate"
                 ></lo-selectTime>
                  <lo-button  @click="submimt1" bgcolor="#409eff" color="#fff">主要按钮</lo-button>
      </div>
    </div>
    <div class="view-content">
      <div class="content-name">
          时间
      </div>
      <div style="width:100%">
        <lo-selectTime ref="selectVal1" type="datetime" @confirm="confirm" :default_startDate="startDate" :default_endDate="endDate"
                 ></lo-selectTime>
                  <lo-button  @click="submimt2" bgcolor="#409eff" color="#fff">主要按钮</lo-button>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // HelloWorld
      msg: 'Welcome to loins UI!',
      color: 'red',
      width:'200px',
      // Select
      selectValue: '',
      selectVal:'',
      selectVal1:'',
      showType:false,
      isShow:true,
      startDate: new Date(),
				endDate: new Date(),
      dataList:[
        {id:1,name:'上海',value:1000},
        {id:2,name:'北京',value:1000},
        {id:3,name:'南京',value:1000},
        {id:4,name:'广东',value:1000},
        {id:5,name:'上海',value:1000},
        {id:6,name:'上海',value:1000},
        {id:7,name:'上海',value:1000},
        {id:8,name:'上海',value:1000},
        {id:9,name:'上海',value:1000},
        {id:10,name:'上海',value:1000},
        {id:11,name:'上海',value:1000},
        {id:12,name:'上海',value:1000},
        {id:13,name:'上海',value:1000},
        {id:14,name:'上海',value:1000},
        {id:15,name:'上海',value:1000},
        {id:16,name:'上海',value:1000},
        {id:17,name:'上海',value:1000},
        {id:18,name:'上海',value:1000},
        {id:19,name:'上海',value:1000},
        {id:20,name:'上海',value:1000},
        {id:21,name:'上海',value:1000},
      ],
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }
      ],
      // input
      input1: '',
      input2: '这是默认值',
      inputDisabled: true,
      // switch
      lightSwitch: false,
      switchLight: true,
      items:[{title:'标题',bgColor:'#fff',borgcolor:'',color:'#000',width:'110px',textAlign:'center'},{title:'标题',bgColor:'#fff',borgcolor:'',color:'#000',width:'110px',textAlign:'center'},
      {title:'标题',bgColor:'#fff',borgcolor:'',color:'#000',width:'110px',textAlign:'center'},
      {title:'标题',bgColor:'#fff',borgcolor:'',color:'#000',width:'110px',textAlign:'center'},
      {title:'标题',bgColor:'#fff',borgcolor:'',color:'#000',width:'110px',textAlign:'center'},
      {title:'标题',bgColor:'#fff',borgcolor:'',color:'#000',width:'110px',textAlign:'center'},
      {title:'标题',bgColor:'#fff',borgcolor:'',color:'#000',width:'110px',textAlign:'center'}],
      lableItems:[
       {color1:'red3221312312312312',colo2r:'red',color3:'red',color4:'red',color5:'red',color6:'red',color7:'red',},
       {color1:'red',colo2r:'red',color3:'red',color4:'red',color5:'red',color6:'red',color7:'red',},
       {color1:'red',colo2r:'red',color3:'red',color4:'red',color5:'red',color6:'red',color7:'red',},
       {color1:'red',colo2r:'red',color3:'red',color4:'red',color5:'red',color6:'red',color7:'red',},
       {color1:'red',colo2r:'red',color3:'red',color4:'red',color5:'red',color6:'red',color7:'red',},
       {color1:'red',colo2r:'red',color3:'red',color4:'red',color5:'red',color6:'red',color7:'red',},
       {color1:'red',colo2r:'red',color3:'red',color4:'red',color5:'red',color6:'red',color7:'red',},
       {color1:'red',colo2r:'red',color3:'red',color4:'red',color5:'red',color6:'red',color7:'red',},
       {color1:'red',colo2r:'red',color3:'red',color4:'red',color5:'red',color6:'red',color7:'red',},
      ],
      id:'aaa',
      imgItems:[
        {url:'url(images/1.jpg)',index:1},
        {url:'url(images/2.jpg)',index:2},
        {url:'url(images/3.jpg)',index:3},
        {url:'url(images/4.jpg)',index:4},
        {url:'url(images/1.jpg)',index:1},
        {url:'url(images/2.jpg)',index:2},
        {url:'url(images/3.jpg)',index:3},
        {url:'url(images/4.jpg)',index:4},
        {url:'url(images/1.jpg)',index:1},
        {url:'url(images/2.jpg)',index:2},
        {url:'url(images/3.jpg)',index:3},
        {url:'url(images/4.jpg)',index:4},
        {url:'url(images/1.jpg)',index:1},
        {url:'url(images/2.jpg)',index:2},
        {url:'url(images/3.jpg)',index:3},
        {url:'url(images/4.jpg)',index:4},
      ]
    }
  },
  methods: {
    onClick: function (e) {
      console.log('click', e);
    },
    submimt1:function(){
        console.log(this.$refs.selectVal.selectVal)
    },
    submimt2:function(){
      console.log(this.$refs.selectVal1.selectVal)
    },
    confirm:function(startDate, endDate){
      console.log('confirm:')
				console.log('startDate is ' + startDate)
				console.log('endDate is ' + endDate)
				this.startDate = startDate
				this.endDate = endDate
				this.isShow = false
    },
    cancel:function(startDate, endDate){
      	console.log('cancel:')
				console.log('startDate is ' + startDate)
				console.log('endDate is ' + endDate)
				this.isShow = false
    },
    handlePrint() {
      console.log('selectValue', this.selectValue);
      console.log('input1:', this.input1);
      console.log('input2:', this.input2);
    },
    aaa:function(evt){
        console.log(evt);
    },
    showAlert:function(){
      this.showType = true;
    },
    revert:function(val){
      debugger
      this.showType = val.type;
    }
  },
  watch: {
    lightSwitch: newValue => console.log('开关：', newValue),
  }
}
</script>

<style lang="scss" scoped>
  .view-content{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #dddddd;
    padding: 5px;
    margin: 5px 0;
  }
  .content-name{
    padding: 5px 15px;
    width: 20%;
    // border: 1px solid #dddddd;
  }
// .moor-select, .moor-btn, .moor-switch, .moor-input {
//   margin: 10px 6px;
// }
// .moor-item {
//   display: flex;
//   align-items: center;

//   label {
//     width: 100px;
//     display: inline-block;
//   }
// }
</style>

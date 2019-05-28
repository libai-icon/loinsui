<template>
  <div>
    <table :id="loinsTableId" class="gridtable">
     <tr>
        <td v-for="item in itemsTable" :style="{backgroundColor: item.bgcolor, borderColor: item.borgcolor, color: item.color,width:item.width,textAlign:item.textAlign}">
          {{item.title}}
        </td>
     </tr>
     <tr v-for="item in itemsLable">
        <td v-for="d in item">
          {{d}}
        </td>
     </tr>
  </table>
  </div>
</template>

<script>
export default {
  name: 'LoinsTable',
  props: {
    itemsTable:Array,
    itemsLable:Array,
    loinsTableId:String
  },
  methods: {
   
  }
}
</script>

<style lang="scss" scoped>
table.gridtable {
    font-family: verdana,arial,sans-serif;
    font-size:11px;
    color:#333333;
    border-width: 1px;
    border-color: #666666;
    border-collapse: collapse;
}
table.gridtable th {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #666666;
    background-color: #dedede;
}
table.gridtable td {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #666666;
    background-color: #ffffff;
}
</style>


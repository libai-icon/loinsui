<template>
  <button
    class="lo-button"
    @click="handleClick"
    :disabled="buttonDisabled"
    :autofocus="autofocus"
    :style="{backgroundColor: bgcolor,  color: color}">
    <img :src="icon" v-if="icon">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'LoButton',
  props: {
    buttonDisabled: Boolean,
    autofocus: Boolean,
    icon: String,
    bgcolor: String,
    color: String
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style lang="scss" scoped>
 .lo-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    // color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 6px 10px;
    font-size: 14px;
    border-radius: 4px;
}
.lo-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
}

</style>


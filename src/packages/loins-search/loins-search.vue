<template>
  <button
    class="btn btn-primary"
    @click="handleClick"
    :disabled="buttonDisabled"
    :autofocus="autofocus"
    :style="{backgroundColor: bgcolor, borderColor: bgcolor, color: color}">
    <img :src="icon" v-if="icon">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <i class="caret"></i>
  </button>
</template>

<script>
export default {
  name: 'LoinsSearch',
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
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
.btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}
.btn-primary:hover {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
}
 btn {
    .caret {
      width: 0;
      height: 0;
      border-left: 8px solid rgba(0, 0, 0, 0);
      border-right: 8px solid rgba(0, 0, 0, 0);
      border-top: 6px solid #999; 
      display: inline-block;
      position: absolute;
      right: 10px;
      transition: 200ms linear;
      transform: rotate(0);
    }

    &.active {
      border-color: #409EFF;

      .caret {
        transform: rotate(-180deg);
      }
    }
  }

</style>


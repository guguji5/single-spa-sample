<template>
  <i :class="iconClasses"></i>
</template>
<script>
  const iconClassPrefix = 'bcui-icon';
  export default {
    name: 'mis-icon',
    props: {
      type: {
        type: String,
      },
    },
    computed: {
      iconClasses() {
        return [
          `${iconClassPrefix}`,
          `${iconClassPrefix}-${this.type}`,
        ];
      },
    },
  };

</script>

<style lang="less" scoped>
  [class*=" bcui-icon"],
  [class^="bcui-icon"] {
    speak: none;
    font-family: 'bcfont';
    font-style: normal;
    font-weight: 400;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    font-variant: normal normal;
  }

</style>

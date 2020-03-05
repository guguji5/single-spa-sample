
<script>
export default {
  name: 'about',
  data(){
    return {
      checkd1:true
    }
  },
  render(h){
    let self =this;
    return h('el-checkbox', {
      props:{
        value:self.checked1
      },
      on: {
        input: function (event) {
          console.log(event)
          self.checkd1=event
        }
      }
    })
  }
}
</script>

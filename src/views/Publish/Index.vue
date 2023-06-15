<template>
  <div style="margin: 0 auto;width: 60%;">
    <div class="blog-info">
      <el-select v-model="value" placeholder="请选择"  :popper-append-to-body="false">
        <el-option
            v-for="item in blogInfo"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
        </el-option>
      </el-select>
    </div>

  </div>

</template>

<script>
export default {
  name: "Index",
  data(){
    return {
      value: '',
      blogInfo: [
        {
          value: '选项1',
          label: '原创'
        },{
          value: '选项2',
          label: '转载'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.blog-info{
  //下拉框
  /deep/.el-select-dropdown {
    border: 1px solid #e08c9b;
  }
//输入框
  .el-input__inner {
    color: #e08c9b;
    border-color: #e08c9b;
  }
//  聚焦时的样式
  .el-select .el-input.is-focus .el-input__inner {
    border-color: #e08c9b;
    color: #e08c9b;
  }
//  下拉框选中
  .el-select-dropdown__item{
    color: #e08c9b;
  }

}
</style>
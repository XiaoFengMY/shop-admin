<template>
  <!-- 通过ref可以拿到form实例 -->
  <!-- :model与form表单实现双向数据绑定，:inline是表单内容的布局方式，为true时一行多列 -->
  <el-form ref="form" label-width="100px" :model="form" :inline=true>
    <!-- 表单域 -->
    <el-form-item
      v-for="item in formLabel"
      :key="item.label"
      :label="item.label"
    >
      <!-- 渲染表单元素
           通过type属性区分 
           数据与表单组件进行双向数据绑定，拿到form数据下的item.model-->
      <!-- 姓名输入 -->
      <!-- item.type：用来区分表单组件中应该渲染什么组件 -->
      <el-input 
        v-if="item.type === 'input'"
        :placeholder="'请输入' + item.label"
        v-model="form[item.model]"
      ></el-input>
      <!-- 性别判断 -->
      <el-switch v-if="item.type === 'switch'" v-model="form[item.model]"></el-switch>
      <!-- 出生日期 -->
      <!-- value-format：日期格式定义 -->
      <el-date-picker 
        v-if="item.type === 'date'"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="选择日期"
        v-model="form[item.model]"
      ></el-date-picker>
      <!-- 性别下拉框 -->
      <el-select
        v-if="item.type === 'select'"
        placeholder="请选择"
        v-model="form[item.model]"
      >
        <!-- 下拉组件，两个选项：男/女
             opts是配置项，里面有是定义好的数据 -->
        <el-option
            v-for="item in item.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <!-- 如果当前的组件都不满足  -->
    <el-form-item>
        <slot>不符合条件</slot>
    </el-form-item>
  </el-form>
</template>

<script> 
export default {
  name: "CommonForm",
  props: {
    formLabel: Array, //form相关配置的数据
    form: Object,  //外部组件传入数据，接收数据对其进行双向绑定
    inline: Boolean, //表单布局：单行/多行
  },
  data() {
    return {};
  },
};
</script>

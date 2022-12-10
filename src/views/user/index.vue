<template>
  <div class="manage">
    <div class="manage-header">
      <el-button type="primary" @click="dialogVisible = true">
        + 新增
      </el-button>
      <el-form :inline="true">
        <el-form-item>
          <el-input
            v-model="searchForm.name"
            placeholder="请输入名称"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog v-model="dialogVisible" title="提示" width="50%">
      <!-- 表单Form -->
      <el-form
        :inline="true"
        :model="form"
        ref="ruleFormRef"
        :rules="rules"
        label-width="“80px"
      >
        <!-- 每一项表单域:el-form-item -->
        <el-form-item label="姓名" prop="name">
          <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="年龄" prop="age">
          <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请输入性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="出生日期">
          <el-form-item prop="birth">
            <el-date-picker
              type="date"
              placeholder="请选择日期"
              v-model="form.birth"
            >
            </el-date-picker>
          </el-form-item>
        </el-form-item>

        <el-form-item label="地址" prop="addr">
          <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >确 定</el-button
          >
        </div>
      </template>
    </el-dialog>
    <div class="common-table">
      <!-- 用户数据Table -->
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="age" label="年龄"> </el-table-column>
        <el-table-column prop="sex" label="性别"> </el-table-column>
        <el-table-column prop="birth" label="出生日期"> </el-table-column>
        <el-table-column prop="addr" label="地址"> </el-table-column>
        <!-- 自定义列 -->
        <el-table-column label="操作">
          <template #default>
            <el-button type="primary" size="small" @click="handleClick"
              >编辑</el-button
            >
            <el-button type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="pager">
        <el-pagination layout="prev, pager, next" :total="1000" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const ruleFormRef = ref<FormInstance>();
const dialogVisible = ref(false);
const rules = reactive<FormRules>({
  name: [{ required: true, message: "请输入名称", trigger: "blur" }],
  age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
  sex: [{ required: true, message: "请输入性别", trigger: "blur" }],
  birth: [{ required: true, message: "请输入日期", trigger: "blur" }],
  addr: [{ required: true, message: "请输入地址", trigger: "blur" }],
});
const form = reactive({
  name: "",
  age: "",
  sex: "",
  birth: "",
  addr: "",
});
const tableData = [
  {
    name: "Tom",
    age: "23",
    sex: "male",
    birth: "2000-11-22",
    addr: "No. 189, Grove St, Los Angeles",
  },
  {
    name: "Tom",
    age: "23",
    sex: "male",
    birth: "2000-11-22",
    addr: "No. 189, Grove St, Los Angeles",
  },
  {
    name: "Tom",
    age: "23",
    sex: "male",
    birth: "2000-11-22",
    addr: "No. 189, Grove St, Los Angeles",
  },
  {
    name: "Tom",
    age: "23",
    sex: "male",
    birth: "2000-11-22",
    addr: "No. 189, Grove St, Los Angeles",
  },
  {
    name: "Tom",
    age: "23",
    sex: "male",
    birth: "2000-11-22",
    addr: "No. 189, Grove St, Los Angeles",
  },
  {
    name: "Tom",
    age: "23",
    sex: "male",
    birth: "2000-11-22",
    addr: "No. 189, Grove St, Los Angeles",
  },
  {
    name: "Tom",
    age: "23",
    sex: "male",
    birth: "2000-11-22",
    addr: "No. 189, Grove St, Los Angeles",
  },
  {
    name: "Tom",
    age: "23",
    sex: "male",
    birth: "2000-11-22",
    addr: "No. 189, Grove St, Los Angeles",
  },
  {
    name: "Tom",
    age: "23",
    sex: "male",
    birth: "2000-11-22",
    addr: "No. 189, Grove St, Los Angeles",
  },
  {
    name: "Tom",
    age: "23",
    sex: "male",
    birth: "2000-11-22",
    addr: "No. 189, Grove St, Los Angeles",
  },
  {
    name: "Tom",
    age: "23",
    sex: "male",
    birth: "2000-11-22",
    addr: "No. 189, Grove St, Los Angeles",
  },
  {
    name: "Tom",
    age: "23",
    sex: "male",
    birth: "2000-11-22",
    addr: "No. 189, Grove St, Los Angeles",
  },
  {
    name: "Tom",
    age: "23",
    sex: "male",
    birth: "2000-11-22",
    addr: "No. 189, Grove St, Los Angeles",
  },
  {
    name: "Tom",
    age: "23",
    sex: "male",
    birth: "2000-11-22",
    addr: "No. 189, Grove St, Los Angeles",
  },
  {
    name: "Tom",
    age: "23",
    sex: "male",
    birth: "2000-11-22",
    addr: "No. 189, Grove St, Los Angeles",
  },
  {
    name: "Tom",
    age: "23",
    sex: "male",
    birth: "2000-11-22",
    addr: "No. 189, Grove St, Los Angeles",
  },
];
const searchForm = {
  name: "",
};
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) {
    console.log("why", formEl);
  } else {
    formEl.validate((valid, fields) => {
      if (valid) {
        console.log("submit!");
        dialogVisible.value = false;
      } else {
        console.log("error submit!", fields);
      }
    });
  }
};
const handleClick = () => {
  console.log("click");
};
const search = () => {
  console.log("search");
};
</script>
<style lang="scss" scoped>
.manage {
  height: 100%;
  margin: 20px;

  .manage-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .common-table {
    height: 90%;
    position: relative;

    .pager {
      position: absolute;
      right: 20px;
      bottom: -20px;
    }
  }
}
</style>

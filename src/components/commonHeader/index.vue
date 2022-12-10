<template>
  <div class="l-content">
    <el-button @click="handleMenu" :icon="Operation" plain />
    <!-- <h3 style="color: #fff">首页</h3> -->
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <!-- 遍历面包屑的数据 -->
      <el-breadcrumb-item
        v-for="item in tags"
        :key="item.path"
        :to="{ path: item.path }"
        >{{ item.label }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
  <div class="r-content">
    <el-dropdown>
      <span class="el-dropdown-link">
        <span>
          <img class="user" :src="userImg" />
        </span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Operation } from "@element-plus/icons-vue";
import { useStore } from "vuex";
import userImg from "../../assets/images/user.png";
const store = useStore();
const tags = computed(() => store.state.tab.tabsList);
const handleMenu = () => {
  store.commit("collapseMenu");
};
</script>

<style lang="scss" scoped>
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>

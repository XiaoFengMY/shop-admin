<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3>后台管理系统</h3>
    <el-menu-item
      @click="clickMenu(item)"
      v-for="item in noChildren"
      :index="item.path"
      :key="item.path"
    >
      <el-icon :size="20" color="#409EFC">
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.label }}</span>
    </el-menu-item>
    <el-sub-menu
      v-for="item in hasChildren"
      :index="item.path + ''"
      :key="item.path"
    >
      <template #title>
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="(subItem, subIndex) in item.children"
        :key="subItem.path"
      >
        <el-menu-item
          @click="clickMenu(subItem)"
          :index="subIndex.toString()"
          >{{ subItem.label }}</el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getMenu } from "../../api/data";

const menu = ref([]);

const router = useRouter();
const store = useStore();

onMounted(() => {
  getMenu("").then((res: any) => {
    const { code, data } = res;
    if (code == 20000) {
      menu.value = data
    }
  });
});

const isCollapse = computed(() => store.state.tab.isCollapse);
const noChildren: any = computed(() => {
  return menu.value.filter((item:any) => !item.children);
});
const hasChildren: any = computed(() => {
  return menu.value.filter((item:any) => item.children);
});
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const clickMenu = (item: any) => {
  router.push(item.path);
  store.commit('selectMenu', item)
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  border: #fff;
  h3 {
    color: white;
    text-align: center;
    line-height: 48px;
    margin: 0;
  }
}
</style>

import { stat } from "fs";

export default {
  // 用于存储具体的数据
  state: {
    // menu是否展开，默认为展开
    isCollapse: false,
    tabsList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "home",
      },
    ],
    // 是否高亮
    currentMenu: null,
    menu: [],
  },
  // 用来修改state中的数据
  mutations: {
    collapseMenu(state: { isCollapse: boolean }) {
      state.isCollapse = !state.isCollapse; //进行取反操作
    },
    selectMenu(state: any, val: any) {
      // 当前点击的菜单不是首页
      if (val.name !== "home") {
        // currentMenu 等于传入进来的数据
        state.currentMenu = val;
        // 拿到当前选中项的索引（看看存不存在）
        const result = state.tabsList.findIndex(
          (item: { name: any; }) => item.name === val.name
        );
        // 不存在的时候添加数据
        if (result === -1) {
          state.tabsList.push(val);
        }
      } else {
        // 是首页就对当前选中的标识重置
        state.currentMenu = null;
      }
    },
    closeTag(state: any, val: any) {
      const result = state.tabsList.findIndex((item: { name: any; }) => item.name == val.name)
      state.tabsList.splice(result,1)
    }
  },
};

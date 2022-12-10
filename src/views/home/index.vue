<template>
  <!-- gutter: 栅格间隔 -->
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover" style="margin-left: 20px">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2022-6-2</span></p>
          <p>上次登录地点：<span>青岛</span></p>
        </div>
      </el-card>
      <el-card
        shadow="hover"
        style="margin-top: 20px; margin-left: 20px; height: 455px"
      >
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col style="margin-top: 20px; margin-left: -16px" :span="16">
      <div class="num">
        <!-- body-style: 设置body的样式 -->
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <el-icon
            class="icon"
            :size="20"
            color="#409EFC"
            :style="{ background: item.color }"
          >
            <component :is="item.icon"></component>
          </el-icon>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 280px">
        <div style="height: 280px" ref="echars"></div>
      </el-card>
      <div class="graph">
        <el-card style="height: 260px">
          <div style="height: 240px" ref="userEcharts"></div>
        </el-card>
        <el-card style="height: 260px">
          <div style="height: 240px" ref="videoEcharts"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { getData } from "../../api/data";
import userImg from "../../assets/images/user.png";
const tableData = ref([]);
const echars = ref();
const userEcharts = ref();
const videoEcharts = ref();
const tableLabel = {
  name: "课程",
  todayBuy: "今日购买",
  monthBuy: "本月购买",
  totalBuy: "总购买",
};
const countData = [
  {
    name: "今日支付订单",
    value: 1234,
    icon: "SuccessFilled",
    color: "#2ec7c9",
  },
  {
    name: "今日收藏订单",
    value: 520,
    icon: "StarFilled",
    color: "#ffb980",
  },
  {
    name: "今日未支付订单",
    value: 678,
    icon: "GoodsFilled",
    color: "#5ab1ef",
  },
  {
    name: "本月支付订单",
    value: 5050,
    icon: "SuccessFilled",
    color: "#2ec7c9",
  },
  {
    name: "本月收藏订单",
    value: 1024,
    icon: "StarFilled",
    color: "#ffb980",
  },
  {
    name: "本月未支付订单",
    value: 6888,
    icon: "GoodsFilled",
    color: "#5ab1ef",
  },
];
onMounted(() => {
  getData().then((res: any) => {
    const { code, data } = res;
    if (code == 20000) {
      tableData.value = data.tableData;
      const order = data.orderData;
      const xData = order.date;
      const keyArray = Object.keys(order.data[0]);
      const series: { name: string; type: string; data: any }[] = [];
      keyArray.forEach((key) => {
        series.push({
          name: key,
          type: "line",
          data: order.data.map((item: { [x: string]: any }) => item[key]),
        });
      });
      const option = {
        xAxis: {
          data: xData,
        },
        yAxis: {},
        legend: {
          data: keyArray,
        },
        series,
      };
      // 柱状图
      const userOption = {
        legend: {
          // 图例文字颜色
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "20%",
        },
        // 提示框
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category", // 类目轴
          data: data.userData.map((item: { date: any }) => item.date),
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: ["#2ec7c9", "#b6a2de"],
        series: [
          {
            name: "新增用户",
            data: data.userData.map((item: { new: any }) => item.new),
            type: "bar", // 柱状图
          },
          {
            name: "活跃用户",
            data: data.userData.map((item: { active: any }) => item.active),
            type: "bar",
          },
        ],
      };
      // 饼图
      const videoOption = {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [
          {
            data: data.videoData,
            type: "pie",
          },
        ],
      };
      const E = echarts.init(echars.value);
      E.setOption(option);
      const U = echarts.init(userEcharts.value);
      U.setOption(userOption);
      const V = echarts.init(videoEcharts.value);
      V.setOption(videoOption);
    }
  });
});
</script>

<style lang="sass" scoped></style>

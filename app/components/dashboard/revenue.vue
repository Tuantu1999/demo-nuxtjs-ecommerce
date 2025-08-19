<script setup lang="ts">
const revenue = 202759938;
const unitSales = 773;
const totalViewers = '30.7K';
const ctr = 48.37;
const co = 3.92;
const gpm = '5.1M';
const buyers = 649;
const avgPrice = 262303;
const views = '40.1K';
const pcu = 413;
const avgDuration = 46;

const series = [
  {
    name: 'Doanh thu',
    data: [12000, 15000, 18000, 22000, 26000, 30000, 34000, 38000, 42000, 47000, 52000, 60000]
  }
];

const chartOptions = {
  chart: {
    id: 'realtime',
    height: 350,
    type: 'line',
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000
      }
    },
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Dynamic Updating Chart',
    align: 'left'
  },
  markers: {
    size: 0
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yaxis: {
    title: {
      text: 'VNĐ'
    }
  },
  legend: {
    show: false
  }
};
</script>

<template>
  <v-card class="pa-6" rounded="lg" elevation="3">
    <!-- Tổng doanh thu -->

    <v-row class="text-left">
      <v-col cols="6">
        <div class="text-h6 font-weight-bold">Revenue (vnd)</div>
        <div class="text-h6 font-weight-bold mt-2">
          {{ revenue.toLocaleString() }}
          (<v-icon color="green">mdi-trending-up</v-icon> <span class="text-14">12%</span>)
        </div>
        <div class="text-subtitle-1">PCU</div>
        <div class="text-h6 font-weight-bold">{{ pcu }}</div>
      </v-col>
      <v-col cols="6">
        <apexchart type="line" ref="chart" :options="chartOptions" :series="series"></apexchart>
      </v-col>
    </v-row>
  </v-card>
</template>

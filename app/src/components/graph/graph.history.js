import echarts from "echarts";
import theme from './graph.theme';

const HistoryChart = {};

echarts.registerTheme('walden', theme.theme);

HistoryChart.init = () => {
  let dom;
  dom = document.getElementById('HistoryChart');
  HistoryChart.chart = echarts.init(dom, 'walden');
};

HistoryChart.set = (data) => {
  let keys = [];
  let pub_data = [];
  let update_data = [];
  data.forEach((d) => {
    let _id = d._id;
    keys.push(_id);
    pub_data.push(d.pub);
    update_data.push(d.ubdate);
  });

  let option = {
    title: {
      text: 'History data chart',
      left: 'center'
    },
    xAxis: {
      type: 'category',
      data: keys
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      trigger: 'axis'
    },
    series: [{
      data: pub_data,
      type: 'line',
      smooth: true,
      color: '#59c4e6',
      name: 'create',
    },
      {
        data: update_data,
        type: 'line',
        smooth: true,
        color: '#edafda',
        name: 'update',
      }
    ]
  };

  HistoryChart.chart.setOption(option);
  return
};


export default HistoryChart;
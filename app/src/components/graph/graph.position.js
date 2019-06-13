import echarts from "echarts";
import theme from './graph.theme';

const PositionChart = {};

echarts.registerTheme('walden', theme.theme);

PositionChart.init = () => {
  PositionChart.chart = echarts.init(document.getElementById('PositionChart'), 'walden');
};

PositionChart.set = (data) => {
  let keys = [];
  let series = [];
  let position_data = data.position;
  position_data.forEach((d) => {
    let _id = d._id ? d._id : 'other';
    keys.push(_id);
    series.push({
      name: _id,
      value: d.count
    })
  });
  let country_data = [];
  let c = data.country.slice(0, 3);
  c.forEach((d) => {
    let _id = d._id ? d._id : 'other';
    country_data.push({
      name: _id,
      value: d.count
    })
  });

  let option = {
    title: {
      text: 'Regional job data chart',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{b}: {c} ({d}%)"
    },
    legend: {
      bottom: 10,
      left: 'center',
      data: keys
    },
    series: [
      {
        name: 'count',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
          normal: {
            position: 'inner',
            textStyle: {
              fontSize: '7',
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: country_data
      },
      {
        name: 'count',
        type: 'pie',
        radius: ['40%', '55%'],
        label: {
          normal: {
            show: false,
            position: 'center',
          },
          emphasis: {
            show: false,
            textStyle: {
              fontSize: '20',
              fontWeight: 'bold'
            }
          }
        },
        data: series
      }
    ]
  };

  PositionChart.chart.setOption(option);
};


export default PositionChart;
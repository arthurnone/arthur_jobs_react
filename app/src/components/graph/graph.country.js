import echarts from "echarts";
import theme from './graph.theme';

const CountryChart = {};

echarts.registerTheme('walden', theme.theme);

CountryChart.init = () => {
  let dom;
  dom = document.getElementById('CountryChart');
  CountryChart.chart = echarts.init(dom, 'walden');
};

CountryChart.set = (data) => {
  let keys = [];
  let series = [];
  data.forEach((d) => {
    let _id = d._id ? d._id : 'other';
    keys.push(_id);
    series.push({
      name: _id,
      value: d.count
    })
  });

  let option = {
    title: {
      text: 'Country job data chart',
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
        radius: ['50%', '70%'],
        center: ['50%', '45%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: series
      }
    ]
  }

  CountryChart.chart.setOption(option);
};


export default CountryChart;
import echarts from "echarts";
import theme from './graph.theme';

const SkillChart = {};

echarts.registerTheme('walden', theme.theme);

SkillChart.init = () => {
  let dom;
  dom = document.getElementById('SkillChart');
  SkillChart.chart = echarts.init(dom, 'walden');
};

SkillChart.set = (data) => {
  let keys = [];
  let series = [];
  data.forEach((d) => {
    let _id = d._id ? d._id : 'other';
    keys.push(_id);
    series.push(d.count)
  });

  let option = {
    title: {
      text: 'Skill data chart',
      left: 'center'
    },
    color: ['#96dee8'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: "{b}: {c}"
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        splitLine: {show: true},
        // axisLabel: {'interval': 1},
        data: keys,
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'count',
        type: 'bar',
        barWidth: '50%',
        data: series
      }
    ]
  };

  SkillChart.chart.setOption(option);
  return
};


export default SkillChart;
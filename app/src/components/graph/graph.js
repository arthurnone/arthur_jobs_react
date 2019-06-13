import React from 'react';

import './graph.sass';

import CountryChart from './graph.country';
import PositionChart from './graph.position';
import SkillChart from './graph.skill';
import HistoryChart from './graph.history';

import Loading from '../widget/loading';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "graph",
      country_data: [],
      position_data: [],
      skill_data: [],
      company_data: [],
      history_data: [],
      loading: true,
    };
  }

  componentDidMount() {
    CountryChart.init();
    PositionChart.init();
    SkillChart.init();
    HistoryChart.init();
    this.getCountriesData(10);
  }

  getCountriesData = (limit) => {
    let url = "/api/graph?q=graph&limit=" + limit;

    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.status === 1) {
            CountryChart.set(result.data.country);
            PositionChart.set(result.data);
            SkillChart.set(result.data.skill);
            HistoryChart.set(result.data.history);
            this.setState({country_data: result.data.country});
            this.setState({position_data: result.data.position});
            this.setState({skill_data: result.data.skill});
            this.setState({history_data: result.data.history});
            this.setState({company_data: result.data.company});
            this.setState({loading: false});
          } else {
            console.warn("api fail.");
            this.setState({loading: false});
          }
        },
        (error) => {
          console.warn("http error");
          this.setState({loading: false});
        }
      )
  }

  render() {
    return (
      <div className="main">
        <div className="content">
          <div className="card">
            <div className="card-content">
              <div className="graph-pc">
                <div id='CountryChart' className='chart border'></div>
                <div id='PositionChart' className='chart border'></div>
                <div id='SkillChart' className='chart border'></div>
                <div id='HistoryChart' className='chart border'></div>
              </div>
              <div className="graph-mobile">

                <div className="graph-table">
                  <div className='title center'>
                    Company Data
                  </div>
                  <table>
                    <thead className="title">
                    <tr>
                      <th className="th">Company</th>
                      <th>Count</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.company_data.map((d) =>
                        <tr key={d._id}>
                          <td className="th">{d._id}</td>
                          <td>{d.count}</td>
                        </tr>
                      )
                    }
                    </tbody>
                  </table>
                </div>

                <div className="graph-table">
                  <div className='title center'>
                    Country Data
                  </div>
                  <table>
                    <thead className="title">
                    <tr>
                      <th className="th">Country</th>
                      <th>Count</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.country_data.map((d) =>
                        <tr key={d._id}>
                          <td>{d._id}</td>
                          <td>{d.count}</td>
                        </tr>
                      )
                    }
                    </tbody>
                  </table>
                </div>

                <div className="graph-table">
                  <div className='title center'>
                    Regional Data
                  </div>
                  <table>
                    <thead className="title">
                    <tr>
                      <th className="th">Regional</th>
                      <th>Count</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.position_data.map((d) =>
                        <tr key={d._id}>
                          <td>{d._id}</td>
                          <td>{d.count}</td>
                        </tr>
                      )
                    }
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="graph-mobile">

                <div className="graph-table">
                  <div className='title center'>
                    Skill Data
                  </div>
                  <table>
                    <thead className="title">
                    <tr>
                      <th>Skill</th>
                      <th>Count</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.skill_data.map((d) =>
                        <tr key={d._id}>
                          <td>{d._id}</td>
                          <td>{d.count}</td>
                        </tr>
                      )
                    }
                    </tbody>
                  </table>
                </div>

                <div className="graph-table">
                  <div className='title center'>
                    History Data
                  </div>
                  <table>
                    <thead className="title">
                    <tr>
                      <th>Date</th>
                      <th>Create</th>
                      <th>Update</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.history_data.map((d) =>
                        <tr key={d._id}>
                          <td>{d._id}</td>
                          <td>{d.pub}</td>
                          <td>{d.ubdate}</td>
                        </tr>
                      )
                    }
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </div>

        {this.state.loading ? <Loading/> : null}

      </div>
    );
  }
}


export default Graph;

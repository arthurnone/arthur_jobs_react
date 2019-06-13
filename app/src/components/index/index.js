import React from 'react';
import Page from '../widget/pagenation';
import Loading from '../widget/loading';

import assetBuilding from '../../asset/building.svg';
import assetMap from '../../asset/map.svg';

function Data(props) {
  const data = props.handler.state.data;
  const listItems = data.map((d) =>
    <div key={d.title} className="data-item text">
      <a className="data-title title" href={d.link} target="_blank" rel="noopener noreferrer">
        {d.title}
      </a>
      <div>
        <img className="data-icon" src={assetBuilding} alt="company"/>
        <div className="data-company">
          <a
            href={"https://stackoverflow.com/jobs/companies/" +
            d.company.replace(" ", "-").replace(" ", "-").replace(" ", "-").replace(" ", "-")}
            target="_blank" rel="noopener noreferrer" className="data-text"
          >
            {d.company}
          </a>
        </div>

        <img className="data-icon" src={assetMap} alt="position"/>
        {d.position}
      </div>
      <div className="data-tag">
        {
          d.skills.map((skills) =>
            <div key={skills} className="data-tag-item text">
              {skills}
            </div>
          )
        }
      </div>
      <div className="data-date">
        {d.pub_date}
      </div>
    </div>
  );
  return (
    <div className="data">
      {listItems}
    </div>
  );
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      skills: ["python", "javascript", "react", "flask", "django", "vue", "angular", "tornado",],
      positions: ["Netherlands", "Germany", "Australia", "Canada", "UK", "America", "France", "Japan",
        "Finland", "Sweden", "Estonia", "Ireland", "Spain", "Poland", "Romania", "New+Zealand", "Singapore"],
      position: "all",
      skill: "all",
      page: {
        page: 1,
        limit: 10,
        count: 9999
      },
      style: {},
      loading: true
    };
  }

  componentDidMount() {
    let height = window.innerHeight * 0.8;
    height = height + 'px';
    let style = {
      minHeight: height
    };
    this.setState({style});
    this.getData(1, "all", "all");
  }

  getData = (p, skill, position) => {
    let url = "/api/job?p=" + p +
      "&skill=" + skill +
      "&position=" + position;

    this.setState({loading: true});
    this.setState({position: position});
    this.setState({skill: skill});

    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.status === 1) {
            this.setState({data: result.data});
            this.setState({page: result.page});
            this.setState({loading: false});
          } else {
            console.warn("api fail.")
          }
        },
        (error) => {
          console.warn("http error")
        }
      )
  }

  setPosition = (event) => {
    this.getData(1, this.state.skill, event.target.value);
  }

  setSkill = (event) => {
    this.getData(1, event.target.value, this.state.position);
  }

  render() {
    return (
      <div className="main">
        <div className="content">
          <div className="card" style={this.state.style}>
            <div className="card-content">
              <div>
                <div className="item">
                  {/*<Positions handler={this}/>*/}
                  <select onChange={this.setPosition} value={this.state.position}>
                    <option value="all">All Countries</option>
                    {
                      this.state.positions.map((d) =>
                        <option value={d} key={d}>
                          {d}
                        </option>)
                    }
                  </select>

                  <select onChange={this.setSkill} value={this.state.skill}>
                    <option value="all">All Skills</option>
                    {
                      this.state.skills.map((d) =>
                        <option value={d} key={d}>
                          {d}
                        </option>)
                    }
                  </select>
                </div>

                <div className="item right data-count">{this.state.page.count}</div>
              </div>

              <Data handler={this}/>
              <Page handler={this}/>
            </div>
          </div>
        </div>
        {this.state.loading ? <Loading/> : null}
      </div>
    );
  }
}


export default Index;

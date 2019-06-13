import React from 'react';


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
    };
  }

  componentDidMount() {
    let height = window.innerHeight / 3;
    height = height > 100 ? height : 100;
    let margin = height + 'px auto';
    height = window.innerHeight/3 + 'px';
    let style = {
      margin,
      height
    };
    this.setState({style});
  }


  render() {
    let {style} = this.state;

    return (
      <div className="main">
        <div className="content">
          <div className="me" style={style}>

            <div className="center title">
              <a className="black" href="https://github.com/arthurnone?tab=repositories">code</a>
            </div>

            <div className="center title">
              <a className="black" href="https://arthurnone.com/me">@arthurnone</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default About;

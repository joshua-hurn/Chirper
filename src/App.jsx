import React, { Component } from "react";
import Timeline from "./Timeline";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chirps: [
        {
          text: 'hello world'
        },
        {
          text: 'Hi Mom'
        },
        {
          text: 'Hi Dad'
        }
      ]
    };
  }
  // componentDidMount() {
  //   this.setState({
  //     text:
  //   });
  // }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.text}
            onChange={event => {
              this.setState({ text: event.target.value });
            }}
          />
        </div>
        <React.Fragment>
          <Timeline chirps={this.state.chirps} />
        </React.Fragment>
      </div>
    );
  }
}

export default App;

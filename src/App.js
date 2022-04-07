import React from "react";
import "./App.css";
import Squirrel from "./Components/Squirrel";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  // add a componentDidMount lifecycle method to fetch data from the API
  componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/vfnx-vebw.json?$$app_token=2y6eroq5UDtsqbdRlo8SOA9rt&running=true"
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({ data: data });
        console.log(this.state.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>2018 NYC Squirrel Survey Data</h1>
        <h2>Number of Observations: {this.state.data.length}</h2>
        {this.state.data.map((squirrel) => (
          <Squirrel data={squirrel} />
        ))}
        {/* <Squirrel data={this.state.data} /> */}
      </div>
    );
  }
}

export default App;

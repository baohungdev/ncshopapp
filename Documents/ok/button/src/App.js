import React from 'react';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: [
        {
          id: 1,
          name: "Barcelona",
          point: 69,
        },
        {
          id: 2,
          name: "Real Madrid",
          point: 56,
        },
        {
          id: 3,
          name: "Atlético Madrid",
          point: 66,
        },
      ],
    };
  }

  setNewData = () => {
    let id = 2;
    this.setState(prevState => ({
      clubs: prevState.clubs.map(
        club => club.id === id ? {...club, point: club.point+ 3} : club
      )
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.setNewData}>Change New Data</button>
        {this.state.clubs.map((team) => (
          <div>
            <h1>{team.name}</h1>
            <h1>{team.point}</h1>
          </div>
        ))}
        <Content />
      </div>
    );
  }
}

class Content extends React.Component {
  componentWillMount() {
    console.log("Component WILL MOUNT!");
  }
  componentDidMount() {
    console.log("Component DID MOUNT!");
  }
  componentWillReceiveProps(newProps) {
    console.log("Component WILL RECIEVE PROPS!");
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL UPDATE!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE!");
  }
  componentWillUnmount() {
    console.log("Component WILL UNMOUNT!");
  }
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}
export default App;

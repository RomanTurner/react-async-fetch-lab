// create your App component here
import React, { Component } from "react";
import NautCard from "./NautCard";
const URL = "http://api.open-notify.org/astros.json";


export default class App extends Component {
    
    state = {
        people:[]
    }

  componentDidMount() {
    fetch(URL)
      .then((res) => res.json())
      .then(res => this.setState({people: res.people}))
      .catch((error) => console.log("Error: ", error));
  }

    displayAstronauts = () => {
       return this.state.people.map((el) => <NautCard data={el}/>)
    };

  render() {
      return <div>{this.displayAstronauts()}</div>;
  }
}

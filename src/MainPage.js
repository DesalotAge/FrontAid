import React from "react";
import Sidebar from "./components/Sidebar";
import { Component } from "react";
import axios from 'axios';
import Map from "./components/Map";

const inst = axios.create({
  baseURL: 'https://shielded-everglades-88732.herokuapp.com/api'
});


const chooseRandom = (arr, num = 1) => {
  const res = [];
  for(let i = 0; i < num; ){
     const random = Math.floor(Math.random() * arr.length);
     if(res.indexOf(arr[random]) !== -1){
        continue;
     };
     res.push(arr[random]);
     i++;
  };
  return res;
};


class MainPage extends Component {
  constructor(props) {
      super(props);
      this.state = {
        nodes_info: [],
        chosen_station: false
      }
      this.changeStationInfo = this.changeStationInfo.bind(this);
  }


  changeStationInfo(e) {
      const coords = e.originalEvent.target.geometry._coordinates;
      console.log(this)
      for (const station of this.state.nodes_info) {
          // console.log(station);
          if (station.lon == coords[0] && station.lat == coords[1]) {
              this.setState({
                ...this.state,
                chosen_station: station
              });  
          }
      }
  }

  componentDidMount() {
    inst.get('/node_list/').then(res => {
        this.setState({
            ...this.state,
            nodes_info: chooseRandom(res.data, 1000),
        })
    })
  }

  render() {
    return (
      
      <div className="app">
        <Sidebar chosen_node={this.state.chosen_station}/>
        <Map nodes_info={this.state.nodes_info} changeStationInfo={this.changeStationInfo}/>
      </div>
    )
  }

};

export {MainPage};
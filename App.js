import { StatusBar } from 'expo-status-bar';
import Loading from './Loading';
import * as Location from "expo-location";
import React from 'react';

export default class extends React.Component {
  getLocation = async() => {  // == await   기다려 ! 
    const location = await Location.getCurrentPositionAsync(options);
    console.log(location);

  }
  componentDidMount(){
    this.getLocation();
    // Location.getCurrentPositionAsync(options)
  }
  render() {
    return <Loading />;
  }
}
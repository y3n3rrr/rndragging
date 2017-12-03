
import React, { Component } from 'react';
import { Platform } from 'react-native';
import {Tabs, Drawers} from './src/config/router'



export default class App extends Component {
  render() {
    if(Platform==="ios")
      return ( <Tabs />);
    else
      return ( <Drawers />);
  }
}

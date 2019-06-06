import React from 'react';
import './App.css';
import Welcome from '../../Routes/Welcome';
import WeatherBar from '../WeatherBar/WeatherBar';

export default class App extends React.Component{
  state ={
    cactusList:[],
    hoverToggle:false
  }
  
  render(){
    return (
      <>
      <Welcome />
      </>
    )
  }
}
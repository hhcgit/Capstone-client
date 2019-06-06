import React from 'react';

import {Button} from '../Utils/Utils';
import Weather from './Weather';

export default class WeatherBar extends React.Component{
    constructor(){
        super();
        this.state = {
            weather: [
                {IconPhrase:''},
                {IconPhrase:''}
                    ],
            error:''
        };
    }
    
    fetchData= (loc) => {
        return fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?q=${loc}&apikey=RlmjBwPlSGEeWBo17JbXdrd61Aol5p8B`,
        {
            method: 'GET'
        })
        .then(res => {if (res[0]){
            return res.json()
        }
        throw Error("Invalid City Name")
        })
        .then(cities => {
            return cities[0].Key
        })
        .then(cityKey =>{
            return fetch(`https://limitless-cove-20632.herokuapp.com/api/weather/${cityKey}`,
            {
                method: 'GET'
            })   
        })
        .then(res2=> {
            if (res2){
                return res2.json()
            }
            throw Error("No Weather Info on this City")
        })
        .then (w => 
            this.setState({
                weather:w
            })
        )
        .catch(err => 
            this.setState({
                error:err
            })
        )
    }
    closeError= (ev) => {
        ev.preventDefault()
        this.setState({
            error:''
        })
    }
    clearCity= (ev) => {
        ev.preventDefault()
        this.setState({
            weather:[
                {IconPhrase:''},
                {IconPhrase:''}
                    ]
        })
    }
    renderError(){
        if (this.state.error) {
            return  (
                <>
                    <Button type="submit" onClick={this.closeError}>X</Button>
                    <span className="error-message"> {this.state.error}</span>
                </>
            )
        }
        return ''
    }
    render(){
        return (
            <>
            <div className="Error-Container">
                {this.renderError()}
            </div>
            <form className="Weather-Container">
                <Weather fetchData={this.fetchData}
                         weather={this.state.weather}
                         clearCity={this.state.clearCity}
                />
            </form>
            </>
        )
    }
}
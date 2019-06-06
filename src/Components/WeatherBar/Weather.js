import React from 'react';
import { Button, Input } from '../Utils/Utils';

export default class Weather extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(ev){
        ev.preventDefault()
        this.props.fetchData(this.state.value)
    }
    handleChange(ev) {
        this.setState({
            value: ev.target.value
        })
    }
    render(){
    if (this.props.weather[0].IconPhrase){
        return (
            <div className="weather">
                Day Time:
                {this.props.weather[0].IconPhrase}
                Night Time:
                {this.props.weather[1].IconPhrase}
                <Button type="submit" onClick={this.props.clearCity}>X</Button>
            </div>
        )
    }
    return (
    <>
        <label htmlFor="weather-input">City Search:
            <Input required 
            name="weather"
            id="weather-input" 
            value = {this.state.value} 
            onChange={this.handleChange} />
        </label>
        <Button type="submit" onClick={this.handleSubmit}>Search</Button>
    </>
    )
    }
}
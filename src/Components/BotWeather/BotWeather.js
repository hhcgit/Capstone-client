import React from './node_modules/react';

export default class botWeather extends React.Component{

    getLocation = (loc) => {
        this.setState({
            location:loc
        })
    }
    
}
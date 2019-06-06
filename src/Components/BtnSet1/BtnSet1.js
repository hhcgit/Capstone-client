import React from 'react';
import './BtnSet1.css';
import {Button} from '../Utils/Utils';

export default class BtnSet1 extends React.Component{
    render(){
        return(
            <div>
                <Button type="button" onClick={this.props.onClickLogin}>Login</Button><br/>
                <Button type="button" onClick={this.props.onClickRegister}>Register</Button><br/>
                <Button type="button" onClick={this.props.onClickGuest}>Continue as Guest</Button>
            </div>
        )
    }
}
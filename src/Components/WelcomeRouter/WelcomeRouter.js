import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import RegistrationPage from '../../Components/RegistrationPage/RegistrationPage';
import BtnSet1 from '../BtnSet1/BtnSet1';

export default class WelcomeRouter extends React.Component{
    constructor(props) {
            super(props);
            this.state={
                list:''
            }
          }
    handleLoginClick= (e) => {
        e.preventDefault()
        this.setState({
            list:'login'
        })
    }
    handleRegisterClick= (e) => {
        e.preventDefault()
        this.setState({
            list:'register'
        })
    }
    handleCancelClick= (e) => {
        e.preventDefault()
        this.setState({
            list:''
        })
    }
    handleGuestClick= (e) => {
        e.preventDefault()
    }
    renderDisplay(){
        if (this.state.list==='login'){
            return (
                <>
                    <LoginPage onClickCancel={this.handleCancelClick}/>
                </>
        )}
        else if (this.state.list==='register'){
            return(
                <>
                    <RegistrationPage onClickCancel={this.handleCancelClick}/>
                </>
            )
        }
        else{
            return(
                <>
                    <BtnSet1 onClickLogin={this.handleLoginClick}
                             onClickRegister={this.handleRegisterClick}
                             onClickGuest={this.handleGuestClick}
                    />
                             
                </>
            )
        }
    }
    render(){
        return (
            <>
                {this.renderDisplay()}
            </>
        )
    }
    
    
}
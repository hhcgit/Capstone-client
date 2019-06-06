import React from 'react';
import TokenService from '../../Services/token-service';


export default class Topnav extends React.Component{
    
    onClickHome= () =>{

    }
    onHoverCactus= () =>{

    }
    onClickRegister= () =>{

    }
    onClickLogin= () =>{

    }
    onClickAboutMe= () =>{

    }
    onClickLogOut= ()=> {
        TokenService.clearAuthToken()
    }
    render(){
        return (
            <nav className="Top-nav">
                <li className="">
                    Home
                </li>
                <li className="">
                    Cactus
                </li>
                {TokenService.hasAuthToken() ? "":<li className="">
                    Register
                </li>}
                {TokenService.hasAuthToken() ? <li className="" onClick={this.onClickLogOut}>Logout</li>:
                <li className="" onClick={this.onClickLogin}>
                    Login
                </li>}
                <li className="">
                    About Me
                </li>
            </nav>
        )
    }
}
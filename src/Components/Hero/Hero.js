import React from 'react';
import './Hero.css';
import WelcomeRouter from '../WelcomeRouter/WelcomeRouter';


export default class Hero extends React.Component{

    render(){
        return (
            <section className="Hero">
                <div className="Hero-inner">
                <h1>Cactus Head</h1>
                <h2>The Blog site for Amateur Cactus Lovers.</h2>
                <div className="Btn-container">
                <WelcomeRouter />
                </div>
                </div>
            </section>
        )
    }
}
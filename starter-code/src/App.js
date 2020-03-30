import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
    <div className="App">
            <div className="main">
                <nav className="navBar">
                    <img src="./images/ironhack-logo.svg"></img>
                    <img src="./images/menu-top.svg"></img>
                </nav>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, to become a Ninka Developer</p>
        <button><a href="#">Awesome!</a></button>
    </div>
        <img src="./images/react-logo.svg"></img>
    <div className="images">
         <img src="./images/icon1.png"></img>
        <img src="./images/icon2.png"></img>
        <img src="./images/icon3.png"></img>
        <img src="./images/icon4.png"></img>
    </div>
    <div className="imgDescriptions">
        <div className="declarative">
            <h1>Declarative</h1>
            <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="components">
            <h1>Components</h1>
            <p>Build encapsulated comonents that manage their state</p>
        </div>
        <div className="single-way">
            <h1>Single-Way</h1>
            <p>A set of immutable values are passed to the component's</p>
        </div>
        <div className="JSX">
            <h1>JSX</h1>
            <p>Statically-typed, designes to run on modern browsers</p>
        </div>
    </div>
    </div>
        )
    }
}
export default App;
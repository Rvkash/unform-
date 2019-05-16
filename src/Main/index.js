import React, { Component } from 'react';
import Logo from './assets/user-4.png'
import  "./styles.css";

export default class Main extends Component {

    render() {
    return (
     <div id = "main-container">
       <form onSubmit= {this.handleSubmit}>
       <img src={Logo} alt=""/>
       <input />
     <button type="Submit">Criar</button>
     </form>
     </div>
    ); 
  }
 }

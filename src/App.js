import React, { Component } from 'react'
import Services from './components/Services';
import MeetTheDoctor from './components/MeetTheDoctor';
import HamBurgerMenu from './components/HamBurgerMenu';

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#FAFAFA"}}>
        <HamBurgerMenu/>
        <div className="service-component"><Services/></div>
        <MeetTheDoctor/>
      </div>
    )
  }
}

export default App

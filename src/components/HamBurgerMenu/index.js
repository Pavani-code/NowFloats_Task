import React, { Component } from "react";
import "./style.css";
import {Button,Row,Col} from 'react-bootstrap'
import {Call} from './StyledComponents'
class HamBurgerMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul id="menu">
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Our Story</li>
              </a>
              <a href="#">
                <li>Meet the doctor</li>
              </a>
              <a href="#">
                <li>Our Services</li>
              </a>
              <a href="#">
                <li>Updates</li>
              </a>
              <a href="#">
                <li>More Infomation</li>
              </a>
              <a href="" target="_blank">
                <li>Contact</li>
              </a><br/><br/>

              <Row>
                  <Col>
                  <Button variant="info" style={{width:"90%",float:"right",background:"white",borderRadius:"20px",color:"#5DBCD2",fontWeight:"bold"}}>Get Appointment</Button>
                  </Col>
                  <Col>
                  <Button variant="outline-info" style={{width:"90%",borderRadius:"20px",float:"left",backgroundColor:"#5DBCD2",color:"white",border:"1px solid white"}}><Call href="tel:">Call +91 234567890</Call></Button>
                  </Col>
              </Row>
            
            </ul>

           
          </div>
          
        </nav>
      </React.Fragment>
    );
  }
}

export default HamBurgerMenu;

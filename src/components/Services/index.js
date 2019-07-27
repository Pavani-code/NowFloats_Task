import React, { Component } from "react";
import "./style.css";
import EachService from './EachService'
class Services extends Component {
  render() {
    return (
      <div>
        <div className="service-container" id="service-main-display-div">
          <div className="main-container">
            <h1 className="header-label">Services</h1>
            <EachService
              serviceHeader={`Holistic Health Care `}
              serviceCost="INR 1,230"
              serviceImg="
              https://s3.amazonaws.com/zweb-s3.uploads/carp/2016/05/NurseWithSenior-660x450.jpg
             " 
              serviceDesc="Our preventive health care package that covers every facet ch."
            />
            <br />
            <EachService
              serviceHeader="Holistic Health Care"
              serviceCost="INR 1,230"
              serviceImg="
              http://www.ssmhealth.com/SSMHealth/media/Images/News/el-reno-er.png?ext=.pngfile.aspx
              "
              serviceDesc="Our preventive health care package that covers every facet ch."
            />
            <br />
            <EachService
              serviceHeader="Holistic Health Care"
              serviceCost="INR 1,230"
              serviceImg="
              https://www.howtorelief.com/wp-content/uploads/2017/11/pediatric-hospital.jpg
              "
              serviceDesc="Our preventive health care package that covers every facet ch."
            /><br/>
            <a href="index.html"><h2 style={{color:"white",float:"right"}}>VIEW ALL SERVICES</h2></a>
            <br /><br/><br/><br/><br/>
          </div>
        </div>
      </div>
    );
  }
}


export default Services;

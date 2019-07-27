import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "./style.css";

class Services extends Component {
  render() {
    return (
      <div>
        <div className="service-container">
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
            <a href="#"><h2 style={{color:"white",float:"right"}}>VIEW ALL SERVICES</h2></a>
            <br /><br/><br/><br/><br/>
          </div>
        </div>
      </div>
    );
  }
}

function EachService(props) {
  function bookAppointmentHandler() {
    alert("Book Appointment will be created soon");
  }
  return (
    <div className="service-main">
      <Card className="service-card" style={{ width: "100%" }}>
        <Card.Img variant="top" className="card-image" src={props.serviceImg} />
        <Card.Body>
          <Card.Title>{props.serviceHeader}<br/>Package</Card.Title>
          <Card.Title className="package-price">{props.serviceCost}</Card.Title>

          <Card.Text>
            {props.serviceDesc}
            <a className="readmore-anchor" href="#">
              Read More>
            </a>
          </Card.Text>
          <Button
            variant="info"
            size="lg"
            block
            className="book-btn"
            onClick={bookAppointmentHandler}
          >
            Book Appointment
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Services;

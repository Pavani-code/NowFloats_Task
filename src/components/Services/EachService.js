import React from 'react'
import {Card,Button} from 'react-bootstrap' 

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
              <a className="readmore-anchor" href="index.html">
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
export default EachService  
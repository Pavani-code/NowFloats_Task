import React, { Component } from "react";
import CallIcon from "react-icons/lib/fa/phone";
import axios from "axios";
import { Button, Card, Row, Col } from "react-bootstrap";
import "./style.css";
class MeetTheDoctor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctorName: "",
      doctorLastName:"",
      doctorImage: "",
      doctorQualification: "",
      doctorSpecialization: "",
      doctorDiscription: "",
      doctorMobileNo:""
      
    };
  }

  componentDidMount() {
    axios.get("https://my-json-server.typicode.com/Pavani-code/Pavani-JSON-Server/doctor").then(
      response => {
        this.setState({
          doctorName: response.data.firstname,
          doctorLastName:response.data.lastname,
          doctorImage: response.data.doctor_image,
          doctorQualification: response.data.qualification,
          doctorSpecialization: response.data.specialisation,
          doctorDiscription: response.data.description,
          doctorMobileNo:response.data.mobile
        });
      }
    );
  }
  render() {
    return (
      <React.Fragment>
        <div className="doctor-container">
          <div className="doctor-main-container">
            <h1 className="doctor-header">Meet the Doctor</h1>
            <Card style={{ width: "100%",borderRadius:"20px 20px 0 0" }}>
              <Card.Img
                style={{ width: "100%" }}
                className="doctor-image"
                variant="top"
                src={this.state.doctorImage}
              />
              <Card.Body>
                <Row>
                  <Col>
                    <div style={{ color: "#5DBCD2", fontSize: "40px" }}>
                      
                      {this.state.doctorName}  {this.state.doctorLastName}
                    </div>
                  </Col>
                </Row>

                <div style={{ fontWeight: "bold" }}>
                  {/* ENT & Head and Neck Surgeon */}
                  {this.state.doctorQualification}
                </div>
                <div style={{ color: "gray" }}>
                 
                  {this.state.doctorSpecialization}
                </div>
                <br />

                <Row>
                  <Col xs lg="4">
                    <CallIcon size={25} color="#5DBCD2" />
                    &nbsp;
                    <strong style={{ color: "#5DBCD2", fontSize: "20px" }}>
                     
                      {this.state.doctorMobileNo}
                    </strong>
                  </Col>
                  <Col>
                    <hr />
                  </Col>
                </Row>
                <br />
                <Card.Text>
                  {/* Dr. Shravan is a ENT/Head and Neck Surgeon currently heading
                  the integrated Head and Neck Services at Healthway Clinic. He
                  graduated in Medicine from Bangalore Medical College with post
                  graduation in ENT from the same institute.He underwent... */}
                  {this.state.doctorDiscription}
                </Card.Text>

                <Row>
                  <Col>
                    <Button variant="info" block onClick={()=>alert('Read more will be created soon!')}>
                      Read More
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="outline-info" block onClick={()=>alert('Book Appointment will be created soon!')}>
                      Book Appointment
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MeetTheDoctor;

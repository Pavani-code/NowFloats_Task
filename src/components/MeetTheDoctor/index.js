import React, { Component } from "react";
import CallIcon from "react-icons/lib/fa/phone";
import axios from "axios";
import { Button, Card, Row, Col } from "react-bootstrap";
import api from "./api_calls/api";
import "./style.css";
import LoadingSpinnder from "./LoadingSpinner";
class MeetTheDoctor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctorName: "",
      doctorLastName: "",
      doctorImage: "",
      doctorQualification: "",
      doctorSpecialization: "",
      doctorDiscription: "",
      doctorMobileNo: "",
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      axios.get(api.DOCTOR_DETAILS_API_URL).then(response => {
        // Destructing the response from the URL
        this.setState({ loading: false });
        const {
          firstname,
          lastname,
          doctor_image,
          qualification,
          specialisation,
          description,
          mobile
        } = response.data;
        this.setState({
          doctorName: firstname,
          doctorLastName: lastname,
          doctorImage: doctor_image,
          doctorQualification: qualification,
          doctorSpecialization: specialisation,
          doctorDiscription: description,
          doctorMobileNo: mobile
        });
      });
    });
  }

  readMoreHandler = () => {
    alert("Read more will be created soon");
  };
  bookAppointmentHandler = () => {
    alert("Book Appointment will be created soon");
  };

  render() {
    // Destructing the state variables
    const {
      doctorName,
      doctorLastName,
      doctorImage,
      doctorQualification,
      doctorSpecialization,
      doctorDiscription,
      doctorMobileNo,
      loading
    } = this.state;
    return (
      <React.Fragment>
        <div className="doctor-container" id="doctor-main-display-div">
          <div className="doctor-main-container">
            <h1 className="doctor-header">Meet the Doctor</h1>
            <Card style={{ width: "100%", borderRadius: "20px 20px 0 0" }}>
              {loading ? (
                <LoadingSpinnder />
              ) : (
                <Card.Img
                  style={{ width: "100%" }}
                  className="doctor-image"
                  variant="top"
                  src={doctorImage}
                  alt="Doctor Image"
                />
              )}

              <Card.Body>
                <Row>
                  <Col>
                    <div style={{ color: "#00b3b3", fontSize: "40px" }}>
                      {doctorName} {doctorLastName}
                    </div>
                  </Col>
                </Row>

                <div style={{ fontWeight: "bold" }}>{doctorQualification}</div>
                <div style={{ color: "gray" }}>{doctorSpecialization}</div>
                <br />

                <Row>
                  <Col xs lg="4">
                    <CallIcon size={25} color="#00b3b3" />
                    &nbsp;
                    <strong style={{ color: "#00b3b3", fontSize: "20px" }}>
                      {doctorMobileNo}
                    </strong>
                  </Col>
                  <Col>
                    <hr />
                  </Col>
                </Row>
                <br />
                <Card.Text>{doctorDiscription}</Card.Text>

                <Row>
                  <Col>
                    <Button
                      variant="info"
                      style={{ backgroundColor: "#00b3b3" }}
                      block
                      onClick={this.readMoreHandler}
                    >
                      Read More
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant="outline-info"
                      style={{ backgroundColor: "#00b3b3", color: "white" }}
                      block
                      onClick={this.bookAppointmentHandler}
                    >
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

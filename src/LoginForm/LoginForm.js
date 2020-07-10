import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export class LoginForm extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
         
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <div style={{ fontWeight: "bold" }}>Report One</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
                {/* <Line
                  data={cardChartData1}
                  options={cardChartOpts1}
                  height={70}
                /> */}
              </div>
            </Card>
          

         
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <div style={{ fontWeight: "bold" }}>Report Two</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
                {/* <Line
                  data={cardChartData1}
                  options={cardChartOpts1}
                  height={70}
                /> */}
              </div>
            </Card>
        

          
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <div style={{ fontWeight: "bold" }}>Report Three</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
                {/* <Line
                  data={cardChartData1}
                  options={cardChartOpts1}
                  height={70}
                /> */}
              </div>
            </Card>
          
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="4">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <div style={{ fontWeight: "bold" }}>Report Four</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
                {/* <Line
                  data={cardChartData1}
                  options={cardChartOpts1}
                  height={70}
                /> */}
              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="4">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <div style={{ fontWeight: "bold" }}>Report Five</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
                {/* <Line
                  data={cardChartData1}
                  options={cardChartOpts1}
                  height={70}
                /> */}
              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="4">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <div style={{ fontWeight: "bold" }}>Report Six</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
                {/* <Line
                  data={cardChartData1}
                  options={cardChartOpts1}
                  height={70}
                /> */}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginForm;

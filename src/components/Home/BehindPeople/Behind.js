import React from "react";
import Card from "react-bootstrap/Card";
import "./Behind.css";
import ceo from "../../../assets/onesss.jpg";
import design from "../../../assets/twossss.jpg";
import developer from "../../../assets/threesss.jpg";
import manager from "../../../assets/fourthsss.jpg";

export default function Behind() {
  return (
    <>
      <section className="cards">
        <div className="container" id="responsibity">
          <div className="row">
            <h2>BEHIND THE PEOPLE</h2>
            <p>
              It is a long established fact that create category leading brand
              experiences a reader will be distracted by the readable content of
              a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className="cards-container">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <Card>
                  <Card.Img variant="top" src={ceo} />
                  <Card.Body>
                    <Card.Title>Mosa Marega</Card.Title>
                    <Card.Text>CEO</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <Card>
                  <Card.Img variant="top" src={design} />
                  <Card.Body>
                    <Card.Title>Elaine Stclair</Card.Title>
                    <Card.Text>DESIGNER</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <Card>
                  <Card.Img variant="top" src={developer} />
                  <Card.Body>
                    <Card.Title>Wanda Arthur</Card.Title>
                    <Card.Text>DEVELOPER</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <Card>
                  <Card.Img variant="top" src={manager} />
                  <Card.Body>
                    <Card.Title>Joshua Stemple</Card.Title>
                    <Card.Text>MANAGER</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

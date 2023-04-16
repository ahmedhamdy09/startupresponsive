import React from "react";
import Data from "../../../Data";
import "./Services.css";
import Servitem from "./Servitem/Servitem";
import online from "../../../assets/online-world.svg";

export default function Services() {
  const item = Data.serv.map((itemBox) => {
    return (
      <>
        <div className="col-md-4">
          <Servitem
            title={itemBox.title}
            text={itemBox.text}
            icons={itemBox.icons}
          />
        </div>
      </>
    );
  });

  return (
    <>
      <section className="services">
        <div className="container" id="servicesOnes">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>OUR SERVICES</h2>
              <p>
                We craft digital, graphic and dimensional thinking, to create
                category leading brand experiences that have <br /> meaning and
                add a value for our clients.
              </p>
            </div>
          </div>
          <div className="row">{item}</div>
          <div className="row last">
            <div className="col-md-6">
              <h3>
                A digital web design studio creating modern & engaging online
                experiences
              </h3>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. A small river named Duden
                flows by their place and supplies it with the necessary
                regelialia.
              </p>
              <ul>
                <li>We put a lot of effort in design.</li>
                <li>The most important ingredient of successful website.</li>
                <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                <li>Submit Your Organization.</li>
              </ul>
              <button>Learn More</button>
            </div>
            <div className="col-md-6">
              <img src={online} alt="online-word" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import Data from "../../../Data";
import "./Peincing.css";

export default function Pricing() {
  const itemPrice = Data.pricing.map((itemBox) => {
    return (
      <>
        <div className="col-md-4">
          <div className="box">
            <h6>{itemBox.title}</h6>
            <h4>{itemBox.price}</h4>
            <span>{itemBox.time}</span>
            <ul>
              <li>
                <span>Bandwidth:</span>
                {itemBox.Bandwidth}
              </li>
              <li>
                <span>Onlinespace:</span>
                {itemBox.Onlinespace}
              </li>
              <li>
                <span>Support:</span>
                {itemBox.Support}
              </li>
              <li>
                <span>Domain:</span>
                {itemBox.Domain}
              </li>
              <li>
                <span>Hidden_Fees:</span>
                {itemBox.Hidden_Fees}
              </li>
            </ul>
          </div>
          <button type="submit">Join Now</button>
        </div>
      </>
    );
  });

  return (
    <>
      <section className="prices">
        <div className="container" id="pricinng">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h2>OUR PRICING</h2>
              <p>
                Call to action pricing table is really crucial to your for your
                business website. <br />
                Make your bids stand-out with amazing options.
              </p>
            </div>
            <div className="row">{itemPrice}</div>
          </div>
        </div>
      </section>
    </>
  );
}

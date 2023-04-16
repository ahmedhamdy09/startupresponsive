import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="containerss" id="contLinkss">
        <div className="touch">
          <h2>GET IN TOUCH</h2>
          <p>
            We thrive when coming up with innovative ideas but also understand
            that a smart concept should be supported with faucibus sapien odio
            measurable results.
          </p>
        </div>

        <div className="explains">
          <div className="locatins">
            <p>
              <span className="h3">Office Address 1:</span>
              <br />
              <span className="pa">4461 Cedar Street Moro, AR 72368</span>
            </p>
            <p>
              <span className="h3">Office Address 2:</span>
              <br />
              <span className="pa">
                2467 Swick Hill Street New Orleans, LA 70171
              </span>
            </p>
            <p>
              <span className="h3">Working Hours:</span>
              <br />
              <span className="pa">9:00AM To 6:00PM</span>
            </p>
          </div>
          <div className="formulaa">
            <form>
              <input
                type="text"
                className="form-name"
                placeholder="Your name*"
              />
              <input
                type="text"
                className="form-mail"
                placeholder="Your email*"
              />
              <br />
              <input
                type="text"
                className="form-subject"
                placeholder="Your Subject.."
              />
              <textarea
                type="text"
                className="form-area"
                placeholder="Your Mesage..."
              />
              <br />
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

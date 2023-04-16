import React from "react";
import "./Footer.css";
import linkedin from "../../assets/icons8-linkedin-2-240.png";
import facebook from "../../assets/icons8-facebook-240.png";
import google from "../../assets/icons8-google-240.png";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="myDetials">
          <p>@{new Date().getFullYear()} Ahmed Hamdy. All right reserved.</p>
          <h2>ahmed hamdy</h2>
          <a href="01092355899">01092355899</a>
        </div>

        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/ahmed-hamdy-a87a651ab/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>

          <a
            href="https://web.facebook.com/ana.henkesh.92/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>

          <a
            href="http://hamdyahmed0988@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={google} alt="google" />
          </a>
        </div>
      </section>
    </>
  );
}

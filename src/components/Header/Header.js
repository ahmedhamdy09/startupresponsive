import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-overlay" id="headersss">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>
                  We help startups launch their <br /> products
                </h2>
                <p>
                  Etiam sed.Interdum consequat proin vestibulum class at a
                  euismod mus luctus <br />
                  quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.
                </p>
                <form>
                  <input type="email" placeholder="Enter Your Email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

import React from "react";
import photosOne from "../../../assets/img-1-6de05f3b12e50e3e9d2187a7bbff6792.jpg";
import photosTwo from "../../../assets/img-2-d5bf0811f10d4c938b66775375182373.jpg";
import photosThree from "../../../assets/img-3-991202bcea2af1789053331ea59e4d1f.jpg";
import "./Blog.css";

export default function Blog() {
  return (
    <>
      <section className="blog">
        <div className="container" id="blogsss">
          <div className="titless">
            <h2>BLOG</h2>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean class at a euismod mus ipsum vel
              ex finibus semper luctus quam.
            </p>
          </div>
          <div className="main-cards">
            <div className="cardsss">
              <img src={photosOne} alt="ux-design" />
              <h5>UI & UX Design</h5>
              <a href="#bn">Doing a cross country road trip</a>
              <p>
                She packed her seven versalia, put her initial into the belt and
                made herself on the way..
              </p>
              <button>Read More</button>
            </div>
            <div className="cardsss">
              <img src={photosTwo} alt="digitalMarkting" />
              <h5>Digital Marketing</h5>
              <a href="#da">New exhibition at our Museum</a>
              <p>
                Pityful a rethoric question ran over her cheek, then she
                continued her way and ahmed hamdy.
              </p>
              <button>Read More</button>
            </div>

            <div className="cardsss">
              <img src={photosThree} alt="travelling" />
              <h5>Travelling</h5>
              <a href="#tt">Why are so many people..</a>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

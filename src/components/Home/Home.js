import React from "react";
import Header from "../Header/Header";
import Services from "./Services/Services";
import Banner from "./Banner/Banner";
import Pricing from "./Princing/Pricing";
import Behind from "./BehindPeople/Behind";
import Blog from "./Blog/Blog";
import Contact from "./Contacts/Contact";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Banner />
      <Pricing />
      <Behind />
      <Blog />
      <Contact />
    </>
  );
}

import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Map from "./components/Map/Map";

function page() {
  return (
    <>
      <Header />
      <Hero />
      <Contact />
      <Map />
      {/* <Footer /> */}
    </>
  );
}

export default page;

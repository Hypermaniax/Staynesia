import { useState } from "react";
import "./App.css";
import Accomodation from "./components/Accomodation";
import WrapperContent from "./components/WrapperContent";
import Hero from "./components/Hero";
import Headline from "./components/HeadLine";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import img from './assets/headLineImg.png'
function App() {
  return (
    <>
      <Header />
      <WrapperContent>
        <Headline />
      </WrapperContent>
      <Hero >
        <img src={img} alt="" className="" />
      </Hero>
      <WrapperContent>
        <Accomodation
          heading={"ACCOMODATION"}
          title={"Explore Spaces In Indonesia"}
        />
        <Carousel heading={"PROMOTION"} title={"Trendy Space"} text />
      </WrapperContent>
      <Footer/>
    </>
  );
}

export default App;

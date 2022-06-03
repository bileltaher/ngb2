import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import { SliderData } from "../SliderData";
import ImageSlider from "../ImageSlider";
import "../ImageSlider.css";
function Home() {
  const items1 = [
    {
      src: "images/nousrec.png",
      text: "Call for applications",
      label: "Applications",
      path: "/services",
    },
    {
      src: "images/img-off.jpg",
      text: "Call for offers",
      label: "Applications",
      path: "/services",
    },
  ];
  const items2 = [
    {
      src: "images/202212515117.jpg",
      text: "Winter Count of Seabirds on the Kuriat Islands",
      label: "Adventure",
      path: "/services",
    },
    {
      src: "images/202121113028.jpg",
      text: "Kuriat: an island adventure in the Mediterranean",
      label: "Applications",
      path: "/services",
    },
    {
      src: "images/4864531.jpg",
      text: "Let's not forget about the turtles!",
      label: "Adrenaline",
      path: "/services",
    },
  ];
  return (
    <>
      <HeroSection />
      <Cards links1={items1} links2={items2} />
      <ImageSlider slides={SliderData} />
    </>
  );
}

export default Home;

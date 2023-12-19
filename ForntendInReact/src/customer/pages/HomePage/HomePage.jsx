import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel1 from "../../components/HomeSectionCarousel/HomeSectionCarousel1";
import HomeSectionCarousel2 from "../../components/HomeSectionCarousel/HomeSectionCarousel2";
import HomeSectionCarousel3 from "../../components/HomeSectionCarousel/HomeSectionCarousel3";
import HomeSectionCarousel4 from "../../components/HomeSectionCarousel/HomeSectionCarousel4";
import { mens_kurta } from "../../../Data/mens_Kurta";
import { men_shirt } from "../../../Data/Men/menShirt";
import { shoes } from "../../../Data/Men/shoes";
import { gounsPage1 } from "../../../Data/Women/gouns";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="flex flex-col items-center gap-4 justify-center">
        <HomeSectionCarousel1 data={mens_kurta} />
        <HomeSectionCarousel2 data={men_shirt} />
        <HomeSectionCarousel3 data={shoes} />
        <HomeSectionCarousel4 data={gounsPage1} />
      </div>
    </div>
  );
};

export default HomePage;

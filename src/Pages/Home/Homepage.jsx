import React from "react";
// import Input from "../../components/ui/Input";
// import Button from "../../components/ui/Button";
// import Navbar from "../../components/ui/Navbar";
// import Card from "../../components/ui/Card"
// import Badge from "../../components/ui/Badge";
// import Heroooo from "../../components/ui/Heroooo";
// import Heading from "../../components/ui/Heading";
// import Para from "../../components/ui/Para";

import hero from "../../assets/hero.png";
import { SimpleHeader } from "../../components/ui/SimpleHeader";
import {Hero} from '../../components/ui/AnimatedHero';
import HeroSection from "./components/HeroSection";
// import hero from '../../assets/hero.png'
import AboutSection from "./components/AboutSection";
import Product from "./components/Product";

const Homepage = () => {
  return (
  
    <>
      {/* <Navbar />

      <Badge text="New" color="green" />

        <Heading title="Hey Welcome to my website" />

      <Input type="text" placeholder="Enter your name" name="name" />
      <Input type="email" placeholder="Enter your email" name="email" />
      <Input
        type="password"
        placeholder="Enter your password"
        name="password"
      />
      <Button content="Submit" />

      <br></br>


      <Card image="product.jpg" title="Nike Shoes" price="1099" />


      <Para text="This is a paragraph component." /> */}


    

      <div className="flex">
      <div className="h-screen bg-blue-950 text-white ">
      <HeroSection/>
      </div>
      <div className="image">
        <img src={hero} alt="image not found" />
      </div>
      </div>
      <div  className="bg-white text-blue-950 pl-4 pr-4 border-5 border-amber-900">
        <AboutSection/>
      </div>
       <div  className="bg-white text-blue-950 border-5 border-amber-900">
        <Product/>
        </div>

      </>
  );
};

export default Homepage;

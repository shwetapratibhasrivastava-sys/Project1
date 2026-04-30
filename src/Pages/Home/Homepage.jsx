import React from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Navbar from "../../components/ui/Navbar";
import Card from "../../components/ui/Card"
import Badge from "../../components/ui/Badge";

const Homepage = () => {
  return (
    <>
      <Navbar />

      <Badge text="New" color="green" />

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
    </>
  );
};

export default Homepage;

"use client";
import React, { useState, useEffect } from "react";
import { Typography, Button, Link } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { handleScroll } from "./utils";
const TopComponent: React.FC = () => {
  const textArray = [
    "Innovative full-stack solutions to transform your business.",
    "Expert cloud services to scale your operations efficiently.",
    "Custom mobile apps that connect with your audience instantly.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, [textArray.length]);

  return (
    <div
      className="astro-container relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url('https://i.ibb.co/YtYqHdX/astronaut.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Optional overlay */}
      <div className="container mx-auto h-full flex flex-col justify-center items-start pl-8">
        <CSSTransition
          key={index}
          in={true}
          appear={true}
          timeout={1000} // Increase duration for fade-in effect
          classNames="fade-left"
        >
          <Button sx={{ color: "#fff" }}>
            <Typography variant="h2" className="font-bold text-left mb-4">
              {textArray[index]}
            </Typography>
          </Button>
        </CSSTransition>
        <Button
          onClick={() => handleScroll("services")}
          className="font-bold text-left mb-4"
          sx={{ color: "#fff" }}
        >
          Our Services →
        </Button>
        <Button className="font-bold text-left mb-4" sx={{ color: "#fff" }}>
          <Link
            href="https://forms.gle/zniK8XhPM9n3rntS8"
            target="_blank"
            variant="h5"
            sx={{ color: "#fff" }}
          >
            Contact Us
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TopComponent;

"use client";
import React, { useState, useEffect } from "react";
import { Typography, Button, Link } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { handleScroll } from "./utils";
const TopComponent: React.FC = () => {
  const textArray = [
    "Manage your communities online. Easier, faster, better.",
    "Communirec makes it say to manage, find, register and pay for activities online.",
    "Communirec provides advanced analytics to help you better understand your community needs.",
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
        <Link
          href="https://forms.gle/zniK8XhPM9n3rntS8"
          target="_blank"
          className="text-white mt-4 block"
        >
          Book a Demo
        </Link>
        <Button className="font-bold text-left mb-4" sx={{ color: "#fff" }}>
          <Link
            href="https://forms.gle/zniK8XhPM9n3rntS8"
            target="_blank"
            variant="h5"
            sx={{ color: "#fff" }}
          >
            <Button variant="contained">
              <Link
                href="https://forms.gle/zniK8XhPM9n3rntS8"
                target="_blank"
                className="text-white mt-4 block"
              >
                Book a Demo
              </Link>
            </Button>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TopComponent;

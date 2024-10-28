"use client";
import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        maxWidth: "100%",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#1A1B45", // Dark navy background
        color: "#FFFFFF",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Box
        sx={{
          maxWidth: "800px",
          padding: "40px 0",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "36px",
            lineHeight: 1.2,
            margin: "20px 0",
          }}
        >
          Manage your community online.
          <br />
          <Box component="span" sx={{ color: "#3366FF" }}>
            Easier, faster, better.
          </Box>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "16px",
            lineHeight: 1.6,
            color: "#CCCCCC",
            marginTop: "20px",
          }}
        >
          Communirec is an online platform for activities and recreation. We
          enable organizations to engage with their community by making it easy
          to find, register, and pay for activities online.
        </Typography>
        <Button
          onClick={() =>
            window.open(
              "https://forms.gle/zniK8XhPM9n3rntS8",
              "_blank",
              "noopener,noreferrer"
            )
          }
          variant="contained"
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#3366FF",
            textTransform: "none",
            padding: "12px 30px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "500",
            marginTop: "20px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#f5f5f5",
              boxShadow: "none",
            },
          }}
        >
          Get a demo
        </Button>
      </Box>

      {/* <Box
        sx={{
          backgroundColor: "#F7F7F7",
          color: "#1A1B45",
          padding: "30px",
          width: "100%",
          fontSize: "18px",
          lineHeight: 1.5,
          marginTop: "20px",
        }}
      >
        <Typography variant="body1">
          Over 1,500 organizations trust our eCommerce platform to bring their{" "}
          <Box component="span" sx={{ color: "#3366FF" }}>
            activities online
          </Box>
          .
        </Typography>
      </Box> */}
    </Box>
  );
};

export default HeroSection;

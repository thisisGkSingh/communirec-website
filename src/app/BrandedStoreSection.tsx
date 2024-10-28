// components/BrandedStoreSection.js
import React from "react";
import { Box, Button, Typography } from "@mui/material";

const BrandedStoreSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "200px",
        backgroundColor: "#F5F7FA",
      }}
    >
      {/* Left Side - Text Section */}
      <Box sx={{ maxWidth: "500px" }}>
        <Typography
          color={"black"}
          variant="h3"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Manage your facility bookings online
        </Typography>
        <Typography variant="body1" sx={{ color: "black", mb: 3 }}>
          Sell activities, memberships, drop-ins, private lessons, facility
          bookings, merchandise, and more online. Engage your clients online by
          curating seamless online experiences that keep them coming back for
          more.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#3366FF",
            color: "#FFFFFF",
            textTransform: "none",
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "500",
            "&:hover": {
              backgroundColor: "#2A5ACC",
            },
          }}
        >
          Learn More
        </Button>
      </Box>

      {/* Right Side - Image Section */}
      <Box
        sx={{
          position: "relative",
          width: "500px",
          height: "300px",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          component="img"
          src="https://i.ibb.co/XC7Dd0m/Champion-Center-Courts-1024x684.jpg"
          alt="Branded Store"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default BrandedStoreSection;

// components/FacilityManagementSection.js
import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

const FacilityManagementSection = () => {
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
      <Box
        sx={{
          display: "flex",
          position: "relative",
          width: "500px",
          height: "300px",
        }}
      >
        <Box
          component="img"
          src="https://i.ibb.co/L9y3S9Q/howtobook-cassiepool.jpg"
          alt="Facility Image 1"
          sx={{
            position: "absolute",
            top: "20px",
            left: "0px",
            width: "150px",
            height: "200px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Box
          component="img"
          src="https://i.ibb.co/LvfL0p9/438.jpg"
          alt="Facility Image 2"
          sx={{
            position: "absolute",
            top: "0px",
            left: "140px",
            width: "200px",
            height: "250px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 1,
          }}
        ></Box>
        <Box
          component="img"
          src="https://i.ibb.co/wS4B2bX/Missy-tennis-pic-e1723124312740.jpg"
          alt="Facility Image 3"
          sx={{
            position: "absolute",
            top: "20px",
            left: "290px",
            width: "250px",
            height: "200px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      </Box>

      {/* Right Side - Text Section */}
      <Box sx={{ maxWidth: "500px", ml: 5 }}>
        <Typography
          color={"black"}
          variant="h3"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Simplify facility & staff management
        </Typography>
        <Typography
          color={"black"}
          variant="body1"
          sx={{ color: "#4A4A4A", mb: 3 }}
        >
          Juggling multiple software and worrying about compatibility is a thing
          of the past. Do everything from managing{" "}
          <Box component="span" sx={{ fontWeight: "bold", color: "#3366FF" }}>
            schedules
          </Box>{" "}
          & conflicts, offering rentals, managing staff permissions, client
          access, and more – under one roof. Save both time and money.
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
    </Box>
  );
};

export default FacilityManagementSection;

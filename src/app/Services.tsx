import React from "react";
import { Typography, Box, Container, Grid, Paper } from "@mui/material";

const Services: React.FC = () => {
  return (
    <div
      id="services"
      style={{
        backgroundImage:
          "url('./Images/BackgroundServices.gif'), linear-gradient(180deg, rgb(53, 52, 119) 38%, #16164b 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-gradient-to-b from-purple-600 to-purple-800 py-16"
    >
      <Box className="text-center text-white mb-16">
        <Typography variant="h3" className="font-bold">
          Our Services
        </Typography>
        <Typography variant="h6" className="mt-4">
          Empowering Your Community with Innovative Technology Solutions
        </Typography>
      </Box>

      <Container>
        <Paper elevation={3} className="p-8 rounded-lg bg-white">
          <Grid container spacing={4}>
            {/* Section 1 */}
            <Grid item xs={12} md={4}>
              <img
                src="https://i.ibb.co/t2591z2/secured.gif"
                alt="Example Image"
                width={200}
                height={200}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" className="text-blue-900 font-bold mb-4">
                Effortlessly Manage Recreation Programs and Engage Your
                Community
              </Typography>
              <Typography variant="body1">
                Communirec is a comprehensive recreation management software
                designed to streamline the organization, registration, and
                payment processes for community programs, memberships, and
                events.
              </Typography>
            </Grid>

            {/* Section 2 */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4" className="text-blue-900 font-bold mb-4">
                Your Complete Solution for Recreation Program Management
              </Typography>
              <Typography variant="body1">
                Communirec offers everything you need to manage community
                programs, memberships, and events seamlessly, all in one place.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://i.ibb.co/bLZYFZV/cms.gif"
                alt="Example Image"
                width={200}
                height={200}
              />
            </Grid>

            {/* Section 3 */}
            <Grid item xs={12} md={4}>
              <img
                src="https://i.ibb.co/w0Lx19K/full-Stack.gif"
                alt="Example Image"
                width={200}
                height={200}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" className="text-blue-900 font-bold mb-4">
                Insightful Analytics to Grow Community Engagement
              </Typography>
              <Typography variant="body1">
                Gain valuable insights into user behavior, program popularity,
                and engagement trends with Communirec's built-in analytics,
                enabling data-driven decisions for better community service.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Services;

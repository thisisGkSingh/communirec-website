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
          Empowering Your Business with Innovative Technology Solutions
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
                World-Class Full-Stack Development Solutions
              </Typography>
              <Typography variant="body1">
                At Imagica Labs, we bring your ideas to life with cutting-edge
                full-stack development. From concept to deployment, our team of
                experienced developers creates robust, scalable, and
                user-friendly applications tailored to your business needs.
                Whether you require front-end finesse or back-end efficiency, we
                deliver seamless integrations and top-notch performance across
                all platforms.
              </Typography>
            </Grid>

            {/* Section 2 */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4" className="text-blue-900 font-bold mb-4">
                Effortless Cloud Computing for a Scalable Future
              </Typography>
              <Typography variant="body1">
                Maximize your business potential with our expert cloud computing
                services. We help you transition to the cloud smoothly, ensuring
                your systems are scalable, secure, and ready to handle the
                demands of the future. Our cloud solutions are designed to
                reduce costs, improve performance, and provide you with the
                flexibility to grow without limits.
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
                Scalable Mobile Application Development
              </Typography>
              <Typography variant="body1">
                In today’s mobile-first world, connecting with your audience
                through intuitive and engaging mobile applications is crucial.
                Imagica Labs specializes in creating custom mobile apps that
                offer a seamless user experience. Whether you need a simple app
                or a complex mobile solution, we deliver applications that
                resonate with your users and drive business success.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Services;

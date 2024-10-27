import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const ClientsSection: React.FC = () => {
  const services = [
    {
      title: "Telus",
      description: "Built Telus.ca",
      imageUrl:
        "https://i.ibb.co/zGGTrPv/TELUS-Black-e96c16dd7c-removebg-preview.png",
    },
    {
      title: "Deloitte",
      description: "Grow your business with SEO, PPC, and Social media.",
      imageUrl: "https://i.ibb.co/FxbgLTP/deloitte-removebg-preview.png",
    },
    {
      title: "Loblaw",
      description:
        "Simple solutions to complex problems with a human-centered approach.",
      imageUrl: "https://i.ibb.co/xj3dH5S/Loblaws-Logo-removebg-preview.png",
    },
    {
      title: "Walmart",
      description: "We help franchise and teams in securing sponsorship.",
      imageUrl:
        "https://i.ibb.co/PFK7t26/walmart-black3674-removebg-preview.png",
    },
    {
      title: "Autodesk",
      description: "Illustrating your value and quality is our priority.",
      imageUrl:
        "https://i.ibb.co/R4zQ9gZ/2560px-Autodesk-Logo-svg-removebg-preview.png",
    },
    {
      title: "Toronto Dominion Bank",
      description: "Everything we do revolves around stories.",
      imageUrl:
        "https://i.ibb.co/tPnnWJ9/TD-Bank-N-A-Logo-wine-removebg-preview.png",
    },
    {
      title: "Cox Automotive",
      description: "",
      imageUrl: "https://i.ibb.co/wCKHTCv/images-removebg-preview.png",
    },
    {
      title: "Scotia bank",
      description: "",
      imageUrl:
        "https://i.ibb.co/Sd6dyf3/scotiabank-1-logo-png-transparent-removebg-preview.png",
    },
  ];

  return (
    <div id="clients">
      <section
        style={{
          backgroundImage: "linear-gradient(125deg,#32265e 0%,#ad30c1 100%)",
        }}
        className="py-16 px-4 clients-section-background"
      >
        <div className="text-center mb-12">
          <Typography variant="h4" className="text-white font-bold">
            Our Clients
          </Typography>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-transparent shadow-none">
              <Box className="image-box">
                <CardMedia
                  component="img"
                  image={service.imageUrl}
                  alt={service.title}
                  className="rounded-lg"
                />
              </Box>
              <CardContent className="text-left">
                <Typography variant="h6" className="text-white font-bold">
                  {/* {service.title} */}
                </Typography>
                <Typography className="text-white">{}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClientsSection;

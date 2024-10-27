import React from "react";
import { Typography, Link } from "@mui/material";
import { Flag as FlagIcon } from "@mui/icons-material";

const ContactUs: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div
        id="contactus"
        className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div>
          <Typography variant="h6" className="font-bold mb-4">
            Communirec
          </Typography>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <FlagIcon className="mr-2" fontSize="small" />
              <Typography>8 Gambia Road, Brampton, Ontario, L7A 4M2</Typography>
            </div>
            <Typography>L7A 4M2</Typography>
          </div>
        </div>

        <div>
          <Typography variant="h6" className="font-bold mb-4">
            Services
          </Typography>
          <ul className="space-y-2">
            <li>Full Stack Application Development</li>
            <li>Mobile Development</li>
            <li>Cloud services</li>
          </ul>
        </div>

        <div>
          <Typography variant="h6" className="font-bold mb-4">
            Working Hours
          </Typography>
          <Typography>Monday - Saturday: 8:00AM - 06:00PM</Typography>
          <Typography>Sunday: 10:00AM - 05:00PM</Typography>
          <Link
            href="https://forms.gle/zniK8XhPM9n3rntS8"
            target="_blank"
            className="text-white mt-4 block"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <Typography variant="body2">
          © 2024 Communirec inc. All Rights Reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default ContactUs;

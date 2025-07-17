import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/diyac490";
  };

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://avatars.githubusercontent.com/u/166870182?v=4"
              alt="Founder"
            />
            <Typography>Diya Chauhan</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample E-Commerce website developed by <strong>Diya Chauhan</strong> using the MERN Stack, for learning and portfolio purposes.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">My Platforms</Typography>
            <a
              href="https://www.youtube.com/@diyac490" // Optional, or replace with another platform
              target="_blank"
              rel="noreferrer"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a
              href="https://instagram.com/diyac490"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

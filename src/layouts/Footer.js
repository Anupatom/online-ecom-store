import React from "react";
import { Paper, Box, Container, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Paper
      sx={{
        marginTop: "calc(1% + 60px)",
        bottom: 0,
        overflowX: "hidden",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container
        maxWidth="lg"
        sx={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Box sx={{ margin: "auto" }}>
          <Typography variant="caption" color="initial">
            Copyright ©2023. Online Ecom Store Limited
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "flex-end",
            display: "flex",
            my: 1,
          }}
        >
          <div>
            <FacebookIcon />
          </div>
          <div>
            <InstagramIcon />
          </div>
          <div>
            <YouTubeIcon />
          </div>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;

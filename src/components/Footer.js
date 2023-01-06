import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
import fb from "../assets/icons/fb.png";
import ig from "../assets/icons/ig.png";


const Footer = () => (
  <Box mt="80px" bgcolor="#a4e2ed">
    <Stack gap="0px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
    <h3>“The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.”</h3><br/>
    
    </Stack>
    <Stack direction="row"
          justifyContent="right" mr={13}>
    <h3 >- Arnold Schwarzenegger </h3> 
    </Stack>
    <Typography variant="h2" sx={{ fontSize: { lg: '18px', xs: '20px' } }} mt="41px" textAlign="center" pb="20px">Connect us on social media: </Typography>
    <Stack
          direction="row"
          justifyContent="center"
          gap="0px"
          fontSize="24px"
          alignItems="flex-end"
          mb={4}
        >
          <a href="https://www.facebook.com/harrypotter098">
            <img
              src={fb}
              alt="logo"
              style={{ width: "30px", height: "30px", margin: "0 20px" }}
            />
          </a>
          <a href="https://www.instagram.com/harrry007/">
            <img
              src={ig}
              alt="logo"
              style={{ width: "30px", height: "30px", margin: "0 20px" }}
            />
          </a>
        </Stack>
    
  </Box>
);

export default Footer;

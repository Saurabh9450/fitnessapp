import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#a4e2ed">
    <Stack gap="1px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
    <h3>“The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.”</h3><br/>
    <h2>- Arnold Schwarzenegger </h2> 
    </Stack>
    <Typography variant="h2" sx={{ fontSize: { lg: '18px', xs: '20px' } }} mt="41px" textAlign="right" pb="20px">Made  by Saurabh Singh</Typography>
  </Box>
);

export default Footer;

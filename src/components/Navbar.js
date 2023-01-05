import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/logo1.png";
import fb from "../assets/icons/fb.png";
import ig from "../assets/icons/ig.png";

const Navbar = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="start"
        sx={{
          gap: { sm: "60px", xs: "40px" },
          mt: { sm: "38px", xs: "20px" },
          justifyContent: "none",
        }}
        px="20px"
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "60px", height: "60px", margin: "0 20px" }}
          />
        </Link>
        <Stack
          direction="row"
          justifyContent="start"
          gap="20px"
          fontSize="24px"
          alignItems="flex-end"
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#3A1212",
              borderBottom: "3px solid #FF2625",
            }}
          >
            Home
          </Link>
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            Exercise
          </a>
        </Stack>
        <Stack
          direction="row"
          justifyContent="start"
          gap="0px"
          fontSize="24px"
          alignItems="flex-end"
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
      </Stack>
    </>
  );
};
export default Navbar;

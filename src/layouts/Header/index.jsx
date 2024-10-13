import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  InputBase,
} from "@mui/material";
import { ShoppingBag, Person, Search as SearchIcon } from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#e3ded9", boxShadow: "none" }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        {/* Left Section */}
        <Box display="flex">
          <Button color="inherit" style={{ color: "#1a1a1a" }}>
            HOME
          </Button>
          <Button color="inherit" style={{ color: "#1a1a1a" }}>
            ALL SHOP
          </Button>
          <Button color="inherit" style={{ color: "#1a1a1a" }}>
            ĐỒ ĂN
          </Button>
          <Button color="inherit" style={{ color: "#1a1a1a" }}>
            NƯỚC UỐNG
          </Button>
        </Box>
        <Box>
          <Typography
            variant="body1"
            style={{
              color: "#1a1a1a", // Set color to black
              marginRight: "20px",
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "Times New Roman",
              fontSize: "40px",
            }}
          >
            D.U.T
          </Typography>
        </Box>
        {/* Right Section */}
        <Box display="flex" alignItems="center">
          <InputBase
            placeholder="Tìm kiếm..."
            sx={{
              borderBottom: "1px solid black", // Set the border to black
              color: "black", // Set input text color to black
              padding: "0 10px",
              width: "200px",
              marginRight: "10px",
            }}
          />
          <IconButton
            color="inherit"
            sx={{ color: "black", "&:hover": { backgroundColor: "#f0f0f0" } }} // Set icon color to black
          >
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" style={{ color: "#000" }}>
            <Person />
          </IconButton>
          <Typography
            variant="body2"
            style={{ marginRight: "10px", color: "#000" }}
          >
            Log In
          </Typography>
          <IconButton color="inherit" style={{ color: "#000" }}>
            <ShoppingBag />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

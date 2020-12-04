import React from "react";
import {
  AppBar,
  ToolBar,
  IconButton,
  menuItem,
  Menu,
  Typography,
  Badge,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/commerce.png";
import classes from "*.module.css";

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" color="inherit" classes={classes.appBar}>
        //this is navigationbar
        <ToolBar>
          <Typography color="inherit" variant="h6" classes={classes.title}>
            <image src={logo} height="25px" />
            Web-Store
          </Typography>
          <div className={classes.grow} />
        </ToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;

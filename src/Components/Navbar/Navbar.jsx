import React from "react";
import {
  AppBar,
  
  IconButton,
  menuItem,
  Menu,
  Typography,
  Badge,
} from "@material-ui/core";
import ToolBar from "./ToolBar";
import { ShoppingCart } from "@material-ui/icons";
import {useStles} from "./styles"
import logo from "../../assets/commerce.png";
import classes from "*.module.css";

const Navbar = () => {
const classes = useStyles();
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
          <div className={classes.button}>
            <IconButton aria-label="show cart item" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </ToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;

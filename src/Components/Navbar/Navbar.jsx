import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  menuItem,
  Menu,
  Typography,
  Badge,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import logo from "../../assets/commerce.png";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" color="inherit" classes={classes.appBar}>
        <Toolbar>
          <Typography color="inherit" variant="h6" classes={classes.title}>
            <image src={logo} height="25px" className={classes.image} />
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
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

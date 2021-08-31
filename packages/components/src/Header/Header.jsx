import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function Navigator(props) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Button color="inherit">Button</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navigator;

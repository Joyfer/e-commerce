import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import { useState } from "react";

import ListDrawerLink from "../menu/DrawerList";

const useStyles = makeStyles({
  button: {
    color: "white",
  },
});
const MenuButton = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Hidden mdUp>
      <IconButton
        className={classes.button}
        aria-label="menu"
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {
          <ListDrawerLink
            functionToggleDrawer={toggleDrawer("left", false)}
          />
        }
      </Drawer>
    </Hidden>
  );
};

export default MenuButton;

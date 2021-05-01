import { useState } from "react";
import { Button, Menu, MenuItem, Hidden } from "@material-ui/core";
import NestedMenuItem from "material-ui-nested-menu-item";

import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  logout: {
    color: "red",
  },
  button: {
    color: "white",
    margin: "0 3px",
  },
});

const MenuBrands = (props) => {
  const classes = useStyles(props);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Hidden smDown>
      <Button
        className={classes.button}
        aria-haspopup="true"
        aria-controls="simple-menu"
        onClick={handleClick}
        startIcon={<ExpandMoreIcon />}
      >
        Marcas
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Nike</MenuItem>
        <MenuItem onClick={handleClose}>Adidas</MenuItem>
        <MenuItem onClick={handleClose}>Gucci</MenuItem>
        <NestedMenuItem label="Button 3" parentMenuOpen={!!anchorEl}>
          <MenuItem onClick={handleClose}>Sub-Button 1</MenuItem>
          <MenuItem onClick={handleClose}>Sub-Button 2</MenuItem>
        </NestedMenuItem>
        <MenuItem onClick={handleClose}>Button 4</MenuItem>
        <NestedMenuItem label="Button 5" parentMenuOpen={!!anchorEl}>
          <MenuItem onClick={handleClose}>Sub-Button 1</MenuItem>
          <MenuItem onClick={handleClose}>Sub-Button 2</MenuItem>
        </NestedMenuItem>
      </Menu>
    </Hidden>
  );
};

export default MenuBrands;

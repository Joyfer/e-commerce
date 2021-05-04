import { useState } from "react";
import { Button, MenuItem, Hidden } from "@material-ui/core";
import NestedMenuItem from "material-ui-nested-menu-item";
import MuiMenu from "../menu/Menu"
import MenuLink from "../menu/MenuLink"

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
  test: {
    justifyContent:'space-between'
  }
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
      <MuiMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>Lo más vendido</MenuItem>
        <NestedMenuItem label="Deportivos" parentMenuOpen={!!anchorEl} className={classes.test}>
          <MenuLink
            onChildClick={handleClose}
            link={{ pathname: "/search", query: { brand: 'nike' }, }}
            label="Nike"
          />
          <MenuLink
            onChildClick={handleClose}
            link={{ pathname: "/search", query: { brand: 'adidas' }, }}
            label="Adidas"
          />
        </NestedMenuItem>
        <NestedMenuItem label="Casual" parentMenuOpen={!!anchorEl} className={classes.test}>
        <MenuLink
            onChildClick={handleClose}
            link={{ pathname: "/search", query: { brand: 'vans' }, }}
            label="Vans"
          />
          <MenuLink
            onChildClick={handleClose}
            link={{ pathname: "/search", query: { brand: 'rs21' }, }}
            label="RS21"
          />
        </NestedMenuItem>
      </MuiMenu>
    </Hidden>
  );
};

export default MenuBrands;

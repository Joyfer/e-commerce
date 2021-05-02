import React, { useState } from "react";
import { Button, Menu, MenuItem, Divider } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import MenuLink from "../menu/MenuLink"

const useStyles = makeStyles({
  logout: {
    color: "red",
  },
  button: {
    color: "white",
    margin: "0 3px",
  },
  divider: {
    margin: "10px 0",
  },
});

const MuiMenu = React.forwardRef((props, ref) => {
  return <Menu  ref={ref} {...props} />;
});

const AccountButton = (props) => {
  const classes = useStyles(props);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <Button
        className={classes.button}
        aria-haspopup="true"
        aria-controls="simple-menu"
        onClick={handleClick}
        startIcon={<AccountCircleIcon />}
      >
        Joyfer
      </Button>
      <MuiMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuLink onClick={handleClose} />
        <MenuItem onClick={handleClose} className={classes.logout}>
          Logout
        </MenuItem>
      </MuiMenu>
    </>
  );
};

export default AccountButton;

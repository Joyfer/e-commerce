import Link from "next/link";
import { Button, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  button: {
    color: "white",
    margin: "0 3px",
  },
});

const ButtonNavigationNav = ({ text }) => {
  const classes = useStyles();
  return (
    <Hidden smDown>
      <Button className={classes.button} startIcon={<AccountCircleIcon />}>
        {text}
      </Button>
    </Hidden>
  );
};

export default ButtonNavigationNav;

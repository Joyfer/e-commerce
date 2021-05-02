import Link from "next/link";
import { Button, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    color: "white",
    margin: "0 3px",
  },
});

const ButtonNavigationNav = ({ text, link }) => {
  const classes = useStyles();
  return (
    <Hidden smDown>
      <Link href={link}>
        <Button className={classes.button}>{text}</Button>
      </Link>
    </Hidden>
  );
};

export default ButtonNavigationNav;

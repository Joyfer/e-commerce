import React from 'react'
import Link from "next/link";
import { Button, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    color: "white",
    margin: "0 3px",
  },
});

const ButtonNavigationComponent = React.forwardRef(({href, text}, ref) => {
  const classes = useStyles();
  return (
    <Button href={href} ref={ref} className={classes.button}>{text}</Button>
  );
});

const ButtonNavigationNav = ({ text, link }) => {
  return (
    <Hidden smDown>
      <Link href={link} passHref>
      <ButtonNavigationComponent text={text} />
      </Link>
    </Hidden>
  );
};

export default ButtonNavigationNav;

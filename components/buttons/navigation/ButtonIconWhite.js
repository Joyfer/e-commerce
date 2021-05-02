import React from "react";
import Link from "next/link";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    color: "white",
  },
});

const IconButtonFunction = React.forwardRef(({href, icon}, ref) => {
  const classes = useStyles();
  return (
    <IconButton href={href} ref={ref} aria-label="" className={classes.button}>
      {icon}
    </IconButton>
  );
});

const ButtonIconWhite = ({ icon, link }) => {
  return (
    <Link href={link} passHref>
      <IconButtonFunction icon={icon} />
    </Link>
  );
};

export default ButtonIconWhite;

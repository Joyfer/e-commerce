import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: "1280px",
      margin: 'auto'
    },
  },
}));

const SectionLayout = (props) => {
  const classes = useStyles();

  return <div className={classes.root}>{props.children}</div>;
};

export default SectionLayout;

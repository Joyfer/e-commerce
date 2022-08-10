import React from "react";

import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: "1024px",
      margin: "auto",
    },
  },
}));

const SectionLayout = (props) => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <div className={classes.root}>{props.children}</div>;
      </Container>
    </>
  );
};

export default SectionLayout;

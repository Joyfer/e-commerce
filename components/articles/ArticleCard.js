import { useEffect, useState, useRef } from "react";
import Link from "next/link";
//Material UI
import { Grid, Box, useMediaQuery, makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import ItemCard from "./ItemCard";

const useStyles = makeStyles(() => ({
  list: {
    display: "flex",
    width: "100%",
    position: "absolute",
    left: 0,
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

const ArticleCard = ({ cardInformation }) => {
  const theme = useTheme();
  const classes = useStyles();

  const lessThanSmall = useMediaQuery(theme.breakpoints.down("xs"));

  if (lessThanSmall) {
    console.log(cardInformation);
  }

  const returnListCard = () => {
    return cardInformation.map((el) => {
      return (
        <Grid item sm={6} md={4}>
          <ItemCard itemInfo={el} key={el.id}></ItemCard>
        </Grid>
      );
    });
  };

  return (
    <>
      {/* <Grid container spacing={2}>
        {returnListCard()}
      </Grid> */}

      <Box className={classes.list}>
        {returnListCard()}
      </Box>
      <div style={{ height: "245px" }}></div>
    </>
  );
};

export default ArticleCard;

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
    overflow: "auto",
    position: "absolute",
    flex: '1 1 0px',
    paddingBottom: "20px",
    gap: '1rem',
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  bookCover: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
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
          <ItemCard itemInfo={el} key={el.id} className={classes.bookCover}></ItemCard>
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

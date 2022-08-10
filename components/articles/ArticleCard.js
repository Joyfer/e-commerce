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
    flex: "1 0 auto",
    paddingBottom: "20px",
    left: 0,
    gap: '1rem',
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  bookCover: {
    width: 200
  },
}));

const ArticleCard = ({ cardInformation }) => {
  const theme = useTheme();
  const classes = useStyles();

  const lessThanSmall = useMediaQuery(theme.breakpoints.down("xs"));

    // Set the height of helping div spacing the absolute div from list
  // Using the list height by useRef
  const ListBookDiv = useRef(null);
  const [heightDivList, setHeightDivList] = useState(280);

  useEffect(() => {
    setHeightDivList(ListBookDiv.current.offsetHeight);
  }, []);

  if (lessThanSmall) {
    console.log(cardInformation);
  }

  const returnListCard = () => {
    return cardInformation.map((el) => {
      return (
        <Grid item sm={6} md={4}>
         <div key={el.id} className={classes.bookCover}>
          <ItemCard itemInfo={el}></ItemCard>
         </div>
        </Grid>
      );
    });
  };

  return (
    <>
      {/* <Grid container spacing={2}>
        {returnListCard()}
      </Grid> */}

      <Box className={classes.list} ref={ListBookDiv}>
        {returnListCard()}
      </Box>
      <div style={{ height: heightDivList + "px" }}></div>
    </>
  );
};

export default ArticleCard;

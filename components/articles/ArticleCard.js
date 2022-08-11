import { useEffect, useState, useRef, useContext } from "react";

//Material UI
import { Grid, Box, makeStyles } from "@material-ui/core";

import ItemCard from "./ItemCard";

import { AppContextProvider } from "../../context/Context";
import useAppContext from "../../context/Context";

const useStyles = makeStyles(() => ({
  list: {
    display: "flex",
    width: "100%",
    overflow: "auto",
    position: "absolute",
    flex: "1 0 auto",
    paddingBottom: "20px",
    left: 0,
    gap: "1rem",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "& > :first-child": {
      marginLeft: "1rem",
    },
    "& > :last-child": {
      marginRight: "1rem",
    },
  },
  bookCover: {
    width: 200,
  },
}));

const ArticleCard = ({ cardInformation }) => {
  const classes = useStyles();

  const { isMobileScreen } = useAppContext();

  // Get if is mobile screen

  // Set the height of helping div spacing the absolute div from list
  // Using the list height by useRef
  const ListBookDiv = useRef(null);
  const [heightDivList, setHeightDivList] = useState(280);

  useEffect(() => {
    setHeightDivList(ListBookDiv.current.offsetHeight);
  }, []);

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

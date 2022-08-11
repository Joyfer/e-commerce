import { useEffect, useState, useRef, useContext } from "react";

//Material UI
import { Grid, Box, makeStyles } from "@material-ui/core";

import { AppContextProvider } from "../../context/Context";
import useAppContext from "../../context/Context";

import ItemCardRender from "./itemCards/ItemCardRender";

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
}));

const ArticleCard = ({ cardInformation }) => {
  const classes = useStyles();

  const { isMobileScreen } = useAppContext();

  // Set the height of helping div spacing the absolute div from list
  // Using the list height by useRef
  const ListBookDiv = useRef(null);
  const [heightDivList, setHeightDivList] = useState(280);

  useEffect(() => {
    if (ListBookDiv.current) {
      setHeightDivList(ListBookDiv.current.offsetHeight);
    }
  }, []);

  if (isMobileScreen === true) {
    return (
      <>
        <Box className={classes.list} ref={ListBookDiv}>
          <ItemCardRender
            cardInformation={cardInformation}
            heightDivList={heightDivList}
          ></ItemCardRender>
        </Box>
        <div style={{ height: heightDivList + "px" }}></div>
      </>
    );
  }

  return (
    <>
      <Grid container spacing={2}>
        <ItemCardRender
          cardInformation={cardInformation}
          heightDivList={heightDivList}
        ></ItemCardRender>
      </Grid>
    </>
  );
};

export default ArticleCard;

import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { element } from "prop-types";

import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  imageMain: {
    width: "100%",
    height: 500,
    objectFit: "cover",
    padding: 14,
    [theme.breakpoints.down("sm")]: {
      height: 280,
      padding: 2,
    },
  },
  imageSmall: {
    height: 80,
    width: 120,
    objectFit: "cover",
    cursor: "pointer",
    transition: "all 0.3s ease-out",
    padding: 2,
    "&:hover": {
      filter: "brightness(0.7)",
    },
  },
  padding: {
    padding: "0 14px",
    [theme.breakpoints.down("sm")]: {
      padding: 2,
    },
  },
  divScroll: {
    overflowX: "auto",
    width: "100%",
    whiteSpace: "nowrap",
  },
}));

const ArticleImagesView = ({ images }) => {
  //My custom component
  const classes = useStyles();
  const [Image, setImage] = useState(images[0]);

  const handleImage = (imageProp) => {
    setImage(imageProp);
  };

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <img src={Image} alt="" className={classes.imageMain} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.padding}
      >
        <div className={classes.divScroll}>
          {images.map((el, index) => {
            return (
              <img
                key={index}
                src={el}
                alt=""
                className={classes.imageSmall}
                onClick={() => handleImage(el)}
              />
            );
          })}
        </div>
      </Box>
    </>
  );
};

export default ArticleImagesView;

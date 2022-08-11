import React from "react";
import Link from "next/link";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import AddCart from "../buttons/articles/AddCart";

import useAppContext from "../../context/Context";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 220,
    [theme.breakpoints.down("sm")]: {
      height: 120,
    },
  },
  bodyCard: {
    height: 70,
    paddingTop: 9,
  },
  actions: {
    justifyContent: "space-between",
  },
  subtitle: {
    marginTop: "0.3rem"
  }
}));

const ItemCard = ({ itemInfo }) => {
  const { id, name, category, price, images } = itemInfo;
  const classes = useStyles();

  const { isMobileScreen } = useAppContext();

  const getNameTypo = () => {
    return isMobileScreen ? "body1" : "h5";
  };

  return (
    <div className={classes.root}>
      <Card elevation={3}>
        <Link href={`/article/${id}`}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={images[0]}
              title={name}
            />
            <CardContent className={classes.bodyCard}>
              <Typography variant={getNameTypo()}>{name}</Typography>
              <Typography variant="body2" color="textSecondary" className={classes.subtitle}>
                {category}Zapatillas deportivas
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions className={classes.actions}>
          <AddCart></AddCart>
          <Typography variant="body1" color="secondary">
            {price}$
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default ItemCard;

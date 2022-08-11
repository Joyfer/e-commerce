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
    [theme.breakpoints.down("xs")]: {
      height: 120,
    },
  },
  bodyCard: {
    paddingTop: 9,
    height: "100%",
  },
  actions: {
    justifyContent: "space-between",
  },
  subtitle: {
    marginTop: "0.3rem",
  },
}));

const ItemCard = ({ itemInfo, heightProp }) => {
  const { id, name, category, price, images } = itemInfo;
  const classes = useStyles();

  const { isMobileScreen } = useAppContext();

  const getNameTypo = () => {
    return isMobileScreen ? "body1" : "h5";
  };

  const cardStyle = makeStyles((theme) => ({
    card: {
      [theme.breakpoints.down("xs")]: {
        height: heightProp + "px",
      },
    },
    cardBody: {
      [theme.breakpoints.down("xs")]: {
        height: `${heightProp - 52.5}px`,
      },
    },
  }));

  const cardStyleClass = cardStyle();

  return (
    <div>
      <Card elevation={3} className={cardStyleClass.card}>
        <Link href={`/article/${id}`}>
          <CardActionArea className={cardStyleClass.cardBody}>
            <CardMedia
              className={classes.media}
              image={images[0]}
              title={name}
            />
            <CardContent className={classes.bodyCard}>
              <Typography variant={getNameTypo()}>{name}</Typography>
              <Typography
                variant="caption"
                color="textSecondary"
                className={classes.subtitle}
              >
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

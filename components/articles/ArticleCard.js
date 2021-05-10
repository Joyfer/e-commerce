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
  Grid,
} from "@material-ui/core";

import AddCart from "../buttons/articles/AddCart";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 220,
    [theme.breakpoints.down("sm")]: {
      height: 260,
    },
  },
  bodyCard: {
    height: 70,
    paddingTop: 9,
  },
  actions: {
    justifyContent: "space-between",
  },
}));

const ArticlesCard = ({ id, name, category, price, image }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root} elevation={2}>
        <Link href={`/article/${id}`}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image}
              title={name}
            />
            <CardContent className={classes.bodyCard}>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {category}
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
    </Grid>
  );
};

export default ArticlesCard;

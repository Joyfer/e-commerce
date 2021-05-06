import PropTypes from 'prop-types';

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Grid} from '@material-ui/core';

import AddCart from "../buttons/articles/AddCart";

const useStyles = makeStyles({
  media: {
    height: 220,
  },
  bodyCard: {
    height: 70,
    paddingTop: 9,
  },
  actions: {
    justifyContent: "space-between",
  },
});

const ArticlesCard = ({ name, category, price }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root} elevation={2}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://i.imgur.com/NOPvS1X.jpg"
            title="Contemplative Reptile"
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

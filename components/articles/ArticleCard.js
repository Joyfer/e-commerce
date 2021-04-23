import { makeStyles } from "@material-ui/core/styles";

//Material UI
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Grid} from '@material-ui/core';

import AddCart from "../buttons/AddCart";

const useStyles = makeStyles({
  media: {
    height: 200,
  },
  bodyCard: {
    height: 70,
    paddingTop: 9,
  },
  actions: {
    justifyContent: "space-between",
  },
});

const ArticlesCard = ({ nombre, categoria, precio }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card className={classes.root} elevation={2}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://i.imgur.com/NOPvS1X.jpg"
            title="Contemplative Reptile"
          />
          <CardContent className={classes.bodyCard}>
            <Typography variant="h5" component="h2">
              {nombre}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {categoria}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <AddCart></AddCart>
          <Typography variant="body1" color="secondary">
            {precio}$
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};



export default ArticlesCard;

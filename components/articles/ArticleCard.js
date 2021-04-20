import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
  root: {
   
  },
  media: {
    height: 200,
  },
  bodyCard: {
    height: 100
  },
  actions: {
    justifyContent: 'space-between'
  }
});

const ArticlesCard = () => {
    const classes = useStyles();
    return ( 
        <Card className={classes.root} elevation={2}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://i.imgur.com/NOPvS1X.jpg"
            title="Contemplative Reptile"
          />
          <CardContent className={classes.bodyCard}>
            <Typography variant="h5" component="h2">
              Nike Retro 1
            </Typography>
            <Typography variant="body2" color="textSecondary">
                Sneakers for men
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <Button size="small" color="secondary" endIcon={<ShoppingCartIcon />}>
            ADD
          </Button>
        <Typography variant="body1" color="secondary">
               300$
            </Typography>
        </CardActions>
      </Card>
     );
}
 
export default ArticlesCard;
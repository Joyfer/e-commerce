import ArticleCard from "../articles/ArticleCard";

//Material UI
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.up('sm')]: {
        paddingRight: 95,
        paddingLeft: 95
      },
      [theme.breakpoints.down('sm')]: {
        paddingRight: 15,
        paddingLeft: 15
      },
    },
    title: {
      marginTop: 45,
    },
    subtitle: {
        marginBottom: 20,
        paddingBottom: 12,
        border: 0,
        borderBottom: "thick solid #556cd6",
    },
    button: {
        width: '100%',
        marginTop: 20,
    }
  }));

const MainArticles = () => {
    const classes = useStyles();
  return (
          <Box width='100%' className={classes.root}>
      <Typography className={classes.title} variant="h3" color="initial" align="center">
        Lo más vendido
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1" color="initial" align="center">
        Descrubre lo mejor en Sneakers
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6} lg={4}>
        <ArticleCard></ArticleCard>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <ArticleCard></ArticleCard>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <ArticleCard></ArticleCard>
      </Grid>
      </Grid>
      <Button className={classes.button} variant="text" color="secondary" endIcon={<ExpandMoreIcon /    >}>
            Ver más
      </Button>
    </Box>
  );
};

export default MainArticles;

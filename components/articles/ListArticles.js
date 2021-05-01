import ArticleCard from "./ArticleCard";
import ShowMore from "../buttons/articles/ShowMore"

//Material UI
import { Grid, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: 125,
      paddingLeft: 125,
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: 15,
      paddingLeft: 15,
    },
  },
  title: {
    marginTop: 45,
  },
  subtitle: {
    paddingBottom: 12,
    border: 0,
    borderBottom: "thick solid #556cd6",
  },
  grid: {
    marginTop: 20,
  },
}));

const MainArticles = ({ title, subtitle }) => {
  const classes = useStyles();
  return (
    <Box width="100%" className={classes.root}>
          <Typography
            className={classes.title}
            variant="h2"
            color="initial"
            align="center"
          >
            {title}
          </Typography>
          <Typography
            className={classes.subtitle}
            variant="subtitle1"
            color="initial"
            align="center"
          >
            {subtitle}
          </Typography>
      <Grid container spacing={2} className={classes.grid}>
        <ArticleCard
          name="Nike Retro 1"
          category="Zapatillas deportivas"
          price={300}
        ></ArticleCard>
      </Grid>
        <ShowMore />
    </Box>
  );
};

export default MainArticles;

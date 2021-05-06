import ArticleCard from "./ArticleCard";
import ShowMore from "../buttons/articles/ShowMore";

//Material UI
import { Grid, Box, Typography } from "@material-ui/core";
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
    margin: "10px 0 10px 0",
  },
  subtitle: {
    paddingBottom: 12,
    border: 0,
    borderBottom: `thick solid ${theme.palette.primary.main}`,
  },
  grid: {
    marginTop: 20,
  },
}));

const MainArticles = ({ title, subtitle, link, cardInformation }) => {
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
        {cardInformation.map((el) => {
          return (
            <ArticleCard
              key={el.id}
              name={el.name}
              category="Zapatillas deportivas"
              price={el.price}
            ></ArticleCard>
          );
        })}
      </Grid>
      <ShowMore link={link} />
    </Box>
  );
};

export default MainArticles;

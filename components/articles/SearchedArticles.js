import ArticleCard from "./ArticleCard";

import { makeStyles } from "@material-ui/core/styles";

import { Box, Typography, Grid } from "@material-ui/core";

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
    marginTop: 25,
  },
  subtitle: {
    textTransform: "uppercase",
    paddingBottom: 12,
    border: 0,
    borderBottom: "thick solid #556cd6",
  },
  grid: {
    marginTop: 20,
  },
}));

const SearchedArticles = ({ searchedQuery, cardInformation }) => {
  const classes = useStyles();
  return (
    <Box width="100%" className={classes.root}>
      <Typography
        className={classes.title}
        variant="h6"
        color="initial"
        align="center"
      >
        Estás viendo:
      </Typography>
      <Typography
        className={classes.subtitle}
        variant="h2"
        color="initial"
        align="center"
      >
        {searchedQuery}
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
    </Box>
  );
};

export default SearchedArticles;

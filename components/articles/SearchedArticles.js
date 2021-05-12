import { makeStyles } from "@material-ui/core/styles";

import { Box, Typography } from "@material-ui/core";
import ArticlesCardsList from "./ArticlesCardList";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      paddingRight: 125,
      paddingLeft: 125,
    },
    [theme.breakpoints.only("md")]: {
      paddingRight: 70,
      paddingLeft: 70,
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: 15,
      paddingLeft: 15,
    },
    margin: "10px 0",
  },
  title: {
    marginTop: 25,
  },
  subtitle: {
    textTransform: "uppercase",
    paddingBottom: 12,
    border: 0,
    borderBottom: `thick solid ${theme.palette.primary.main}`,
  },
}));

const SearchedArticles = ({ searchedQuery, cardInformation }) => {
  const classes = useStyles();
  return (
    <Box width="100%" className={classes.root}>
      <Box mb={4}>
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
      </Box>
      <ArticlesCardsList cardInformation={cardInformation} />
    </Box>
  );
};

export default SearchedArticles;

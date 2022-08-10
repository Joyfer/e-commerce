import ShowMore from "../buttons/articles/ShowMore";

//Material UI
import { Box, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import ArticleCard from "./ArticleCard";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px 0",
  },
  subtitle: {
    paddingBottom: 12,
    border: 0,
    borderBottom: `thick solid ${theme.palette.primary.main}`,
  },
}));

const ListArticlesIndex = ({ title, subtitle, link, cardInformation }) => {
  const classes = useStyles();
  return (
    <Box width="100%" className={classes.root}>
      <Box mb={4}>
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
      </Box>
      <ArticleCard cardInformation={cardInformation}></ArticleCard>
      <ShowMore link={link} />
    </Box>
  );
};

export default ListArticlesIndex;

import Head from "next/head";

//Components
import Layout from "../components/Layout";
import SearchedArticlesHeader from "../components/articles/SearchedArticlesHeader";
import ListArticles from "../components/articles/ListArticles";
import InitialNav from "../components/navs/InitialNav";

//Material UI
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
  image: {
    height: "20vh",
    background: "url('https://i.imgur.com/NOPvS1X.jpg')",
  },
});

export default function SearchPage() {
  const classes = useStyles();
  return (
    <Layout>
      <Head>
        <title>Next Shop || Search: Nike</title>
      </Head>
      <Box className={classes.image}>
        <InitialNav></InitialNav>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        className={classes.root}
      >
        <SearchedArticlesHeader />
        <ListArticles title="" subtitle=""></ListArticles>
      </Box>
    </Layout>
  );
}

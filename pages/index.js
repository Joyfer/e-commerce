import Head from "next/head";

//Components
import Layout from "../components/Layout";
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
    height: "70vh",
    background: "url('https://i.imgur.com/NOPvS1X.jpg')",
  },
});

export default function Index() {
  const classes = useStyles();
  return (
    <Layout>
      <Head>
        <title>Next Shop || Home</title>
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
        <ListArticles
          title="Lo más vendido"
          subtitle="Descubre lo que la gente ama más"
        ></ListArticles>
      </Box>
    </Layout>
  );
}

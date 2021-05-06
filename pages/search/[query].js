import Head from "next/head";
import { useRouter } from "next/router";

//Components
import Layout from "../../components/Layout";
import SearchedArticlesHeader from "../../components/articles/SearchedArticles";
import InitialNav from "../../components/navs/InitialNav";

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

export default function SearchPage({query}) {
  const classes = useStyles();
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <Layout>
      <Head>
        <title>Next Shop || Search: {query}</title>
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
        <SearchedArticlesHeader searchedQuery={query} />
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { query: 'Nike' } } // Pre-render this path on build time
    ],
    fallback: true // Default true for fallback pages
  };
}

export async function getStaticProps({params}) {
  // Get el query url de params
  let query = params.query
  return {
    props: {
      query
    },
    revalidate: 60, // In seconds
  }
}
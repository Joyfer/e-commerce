import Head from "next/head";
import { useRouter } from "next/router";

//Components
import Layout from "../../components/Layout";
import SearchedArticles from "../../components/articles/SearchedArticles";
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

export default function SearchPage({ query, allProps }) {
  const classes = useStyles();
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <Head>
        <title>Next Shop || Search: {query.toUpperCase()}</title>
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
        <SearchedArticles searchedQuery={query} cardInformation={allProps} />
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { query: "Nike" } }, // Pre-render this path on build time
    ],
    fallback: true, // Default true for fallback pages
  };
}

export async function getStaticProps({ params }) {
  // Get query from params
  let query = params.query.toLowerCase();
  const res = await fetch(`http://localhost:3000/api/articles/${query}`);
  const allProps = await res.json();
  console.log(allProps);

  return {
    props: {
      query,
      allProps,
    },
    revalidate: 60, // In seconds
  };
}

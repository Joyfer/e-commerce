import Head from "next/head";
import { useRouter } from "next/router";

//Components
import Layout from "../../components/Layout";
import SearchedArticles from "../../components/articles/SearchedArticles";
import InitialNav from "../../components/navs/InitialNav";
import ChipGroup from "../../components/navs/ChipGroup";
import object from "../../src/object";
import SectionLayout from "../../components/SectionLayout";

//Material UI
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
  image: {
    height: "20vh",
    background:
      "url('https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80')",
  },
});

export default function SearchPage({ brand, allProps }) {
  const classes = useStyles();
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <Head>
        <title>Next Shop || Search: {brand}</title>
      </Head>
      <Box className={classes.image}>
        <InitialNav></InitialNav>
      </Box>
      <SectionLayout>
        <Box>
          <ChipGroup chips={["nike", "adidas", "vans", "converse"]} />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
        >
          <SearchedArticles searchedQuery={brand} cardInformation={allProps} />
        </Box>
      </SectionLayout>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  // Get query from context
  let brand = query.query.toLowerCase();
  let allProps = object.articles.filter((el) => el.brand === brand);
  return {
    props: {
      brand,
      allProps,
    }, // will be passed to the page component as props
  };
}

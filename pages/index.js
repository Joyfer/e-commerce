import Head from "next/head";
import { createMocks } from "node-mocks-http";

//Components
import Layout from "../components/Layout";
import ListArticlesIndex from "../components/articles/ListArticlesIndex";
import InitialNav from "../components/navs/InitialNav";
import ChipGroup from "../components/navs/ChipGroup";
import getArticles from "./api/articles/brand/[brand]";

//Material UI
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  image: {
    height: "70vh",
    background:
      "url('https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80') center",
  },
});

export default function Index({ allProps }) {
  const classes = useStyles();
  return (
    <Layout>
      <Head>
        <title>Next Shop || Home</title>
      </Head>
      <Box className={classes.image}>
        <InitialNav></InitialNav>
      </Box>
      <Box>
        <ChipGroup chips={["nike", "adidas", "vans", "converse"]} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
      >
        {[
          {
            title: "Lo más vendido",
            subtitle: "Descubre lo que la gente ama",
            link: "Top",
            cardInformation: "adidas",
          },
          {
            title: "Nike",
            subtitle: "Lo mejor de Nike",
            link: "Nike",
            cardInformation: "nike",
          },
          {
            title: "Vans",
            subtitle: "Lo mejor de Vans",
            link: "Vans",
            cardInformation: "vans",
          },
        ].map(({ title, subtitle, link, cardInformation }, index) => {
          return (
            <ListArticlesIndex
              key={index}
              title={title}
              subtitle={subtitle}
              link={link}
              cardInformation={allProps.filter(
                (el) => el.brand === cardInformation
              )}
            ></ListArticlesIndex>
          );
        })}
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  let allProps = [];

  let search = ["nike", "adidas", "vans"];
  for (let el of search) {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        brand: el,
      },
    });
    await getArticles(req, res);
    const newResponse = await JSON.parse(res._getData());
    allProps = [...allProps, ...newResponse];
  }
  return {
    props: {
      allProps,
    },
    revalidate: 60, // In seconds
  };
}

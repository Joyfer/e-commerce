import Head from "next/head";

//Components
import Layout from "../components/Layout";
import ListArticlesIndex from "../components/articles/ListArticlesIndex";
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

export default function Index({allProps}) {
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
        {[
          {
            title: "Lo más vendido",
            subtitle: "Descubre lo que la gente ama",
            link: "Top",
            cardInformation: 'adidas'
          },
          {
            title: "Nike",
            subtitle: "Lo mejor de Nike",
            link: "Nike",
            cardInformation: 'nike'
          },
          {
            title: "Vans",
            subtitle: "Lo mejor de Vans",
            link: "Vans",
            cardInformation: 'vans'
          },
        ].map(({ title, subtitle, link, cardInformation }, index) => {
          return (
            <ListArticlesIndex
              key={index}
              title={title}
              subtitle={subtitle}
              link={link}
              cardInformation={allProps.filter((el) => el.brand === cardInformation)}
            ></ListArticlesIndex>
          );
        })}
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  let allProps = [];

  let search = ['nike', 'adidas', 'vans'];
  for (let el of search){
    let res = await fetch(`http://localhost:3000/api/articles/brand/${el}`)
    let newResponse = await res.json()
    allProps = [...allProps, ...newResponse]
  }
  return {
    props: {
      allProps
    },
    revalidate: 60, // In seconds
  }
}

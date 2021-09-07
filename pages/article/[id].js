import Head from "next/head";
import { useRouter } from "next/router";

//Components
import Layout from "../../components/Layout";
import InitialNav from "../../components/navs/InitialNav";
import SelectInput from "../../components/inputs/select";
import BuyArticle from "../../components/buttons/articles/BuyArticle";
import AddCart from "../../components/buttons/articles/AddCart";
import ArticleImagesView from "../../components/articles/ArticleImagesView";
import object from "../../src/object";

//Material UI
import { Box, Paper, Typography, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "-20px",
  },
  paper: {
    width: "90%",
    margin: "auto",
    position: "relative",
    paddingBottom: 10,
    [theme.breakpoints.down("sm")]: {
      width: "96%",
    },
  },
  image: {
    height: "15vh",
    background:
      "url('https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80') center",
    position: "relative",
  },
  textCenter: {
    textAlign: "center",
  },
  subtitle: {
    padding: "0 10px",
  },
  divider: {
    margin: "10px 0",
    padding: "3px 0",
    backgroundColor: theme.palette.primary.main,
  },
  marginLeft: {
    marginLeft: 7,
    textTransform: "uppercase",
  },
  marginButtons: {
    marginTop: "60%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10%",
    },
  },
}));

export default function ArticleView({ allProps }) {
  const classes = useStyles();
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <Head>
        <title>Next Shop || Article: {allProps.name}</title>
      </Head>
      <Box className={classes.image}>
        <InitialNav></InitialNav>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.root}
        pb={3}
      >
        <Paper className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={7}>
              <ArticleImagesView images={allProps.images} />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box p={2} height="100%">
                <Typography variant="h3" color="initial">
                  {allProps.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="initial"
                  className={classes.subtitle}
                >
                  Zapatos deportivos
                </Typography>
                <Divider className={classes.divider}></Divider>
                <Box display="flex" alignItems="center">
                  <Typography variant="body1" color="initial">
                    <b>Marca: </b>
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    className={classes.marginLeft}
                  >
                    {allProps.brand}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography variant="body1" color="initial">
                    <b>Tallas:</b>
                  </Typography>
                  <SelectInput />
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography variant="body1" color="initial">
                    <b>Precio:</b>
                  </Typography>
                  <Typography
                    className={classes.marginLeft}
                    variant="h6"
                    color="secondary"
                  >
                    {allProps.price}$
                  </Typography>
                </Box>
                <Box
                  className={classes.marginButtons}
                  display="flex"
                  alignItems="flex-end"
                  justifyContent="start"
                >
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                      <BuyArticle />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <AddCart />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      // Pre-render this path on build time
    ],
    fallback: true, // Default true for fallback pages
  };
}

export async function getStaticProps({ params }) {
  // Get query from params
  let id = params.id,
    allProps,
    filter = object.articles.filter((el) => el.id === id);
  allProps = filter[0];
  return {
    props: {
      allProps,
    },
    revalidate: 60, // In seconds
  };
}

import Head from "next/head";

//Components
import Layout from "../../components/Layout";
import InitialNav from "../../components/navs/InitialNav";
import SelectInput from "../../components/inputs/select";
import BuyArticle from "../../components/buttons/articles/BuyArticle";
import AddCart from "../../components/buttons/articles/AddCart";

//Material UI
import {
  Box,
  Paper,
  Typography,
  Hidden,
  Grid,
  Divider,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
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
    height: "40vh",
    background: "url('https://i.imgur.com/NOPvS1X.jpg')",
    position: "relative",
  },
  textCenter: {
    textAlign: "center",
  },
  imageMain: {
    width: "100%",
    height: 500,
    objectFit: "cover",
    padding: 14,
    [theme.breakpoints.down("sm")]: {
      height: 280,
      padding: 2,
    },
  },
  imageSmall: {
    height: 80,
    width: 120,
    objectFit: "cover",
    padding: 3,
  },
  subtitle: {
    padding: "0 10px",
  },
  divider: {
    margin: "10px 0",
    padding: '3px 0',
    backgroundColor: theme.palette.primary.main
  },
  marginLeft: {
    marginLeft: 7,
  },
  marginButtons: {
    marginTop: "50%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10%",
    },
  },
}));

export default function ArticleView() {
  const classes = useStyles();
  return (
    <Layout>
      <Head>
        <title>Next Shop || Article</title>
      </Head>
      <Box className={classes.image}>
        <InitialNav></InitialNav>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={classes.root}
        >
          <Paper className={classes.paper}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={7}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    src="https://i.imgur.com/NOPvS1X.jpg"
                    alt=""
                    className={classes.imageMain}
                  />
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    src="https://i.imgur.com/NOPvS1X.jpg"
                    alt=""
                    className={classes.imageSmall}
                  />
                  <img
                    src="https://i.imgur.com/NOPvS1X.jpg"
                    alt=""
                    className={classes.imageSmall}
                  />
                  <img
                    src="https://i.imgur.com/NOPvS1X.jpg"
                    alt=""
                    className={classes.imageSmall}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Box p={2} height="100%">
                  <Typography variant="h3" color="initial">
                    Nike Retro 1
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="initial"
                    className={classes.subtitle}
                  >
                    Zapatos deportivos
                  </Typography>
                  <Divider className={classes.divider}></Divider>
                  <Typography variant="body1" color="initial">
                    <b>Marca: </b>Nike
                  </Typography>
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
                      300$
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
      </Box>
    </Layout>
  );
}

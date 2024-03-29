import Head from "next/head";

//Components
import InitialNav from "../components/navs/InitialNav";
import CartArticles from "../components/articles/CartArticles";
import LogoutButton from "../components/buttons/session/LogoutButton";
import BuyArticle from "../components/buttons/articles/BuyArticle";
import object from "../src/object";
import SectionLayout from "../components/SectionLayout";

//Material UI
import { Box, Paper, Typography, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "-20px",
  },
  paper: {
    margin: "auto",
    position: "relative",
    paddingBottom: 10,
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
  iconMail: {
    marginRight: 6,
  },
}));

const getData = () => {
  let allElements = [];
  const ids = ["1", "2", "3", "4", "5"];
  for (let searchedId of ids) {
    let filter = object.articles.filter((el) => el.id === searchedId);
    allElements = [...allElements, ...filter];
  }
  return allElements;
};

export default function Profile() {
  const classes = useStyles();
  const allProps = getData();

  return (
    <>
      <Head>
        <title>Next Shop || Profile </title>
      </Head>
      <Box className={classes.image}>
        <InitialNav></InitialNav>
      </Box>
      <SectionLayout>
        <Box className={classes.root}>
          <Paper className={classes.paper}>
            <Box
              py={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
              px={4}
            >
              <Typography variant="h2" className={classes.textCenter}>
                Joyfer
              </Typography>
              <Box display="flex">
                <Hidden smDown>
                  <MailIcon className={classes.iconMail} />
                </Hidden>
                <Typography variant="subtitle1" className={classes.textCenter}>
                  <b>Correo eléctronico: </b>joyferramos@gmail.com
                </Typography>
              </Box>
            </Box>
            <Box mt={2}>
              <Typography variant="h5" className={classes.textCenter}>
                Carrito de compras:
              </Typography>
            </Box>
            <CartArticles list={allProps}></CartArticles>
            <Box
              display="flex"
              justifyContent="flex-end"
              mt={3}
              mb={1}
              mr={1}
              className={classes.flexEnd}
            >
              <Box mx={1}>
                <LogoutButton />
              </Box>
              <BuyArticle />
            </Box>
          </Paper>
        </Box>
      </SectionLayout>
    </>
  );
}

import Head from "next/head";

//Components
import Layout from "../components/Layout";
import InitialNav from "../components/navs/InitialNav";
import CartArticles from "../components/articles/CartArticles";
import LogoutButton from "../components/buttons/session/LogoutButton";

//Material UI
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
  },
  paper: {
    width: "70%",
    margin: "auto",
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
  logoutButton: {
    alignSelf: "end",
  },
  iconMail: {
    marginRight: 6,
  },
}));

export default function Profile() {
  const classes = useStyles();
  return (
    <Layout>
      <Head>
        <title>Next Shop || Perfil</title>
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
            <Box bgcolor="primary.main" py={2} color="white">
              <Typography variant="h2" className={classes.textCenter}>
                Joyfer
              </Typography>
              <br />
              <Box display="flex" justifyContent="center">
                <MailIcon className={classes.iconMail} />
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
            <CartArticles></CartArticles>
            <Box
              display="flex"
              justifyContent="flex-end"
              mt={3}
              mb={1}
              mr={1}
              className={classes.flexEnd}
            >
              <LogoutButton className={classes.logoutButton}></LogoutButton>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Layout>
  );
}

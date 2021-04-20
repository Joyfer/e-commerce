import React from "react";

//Components
import Layout from "../components/Layout";
import MainImage from "../components/home/MainImage";
import MainArticles from "../components/home/MainArticles";
import AccountButton from "../components/buttons/Account"
import ShoppingCartButton from "../components/buttons/ShoppingCart"

//Material UI
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
  image: {
    height: '70vh',
    background: "url('https://i.imgur.com/NOPvS1X.jpg')"
  }
});

export default function Index() {
  const classes = useStyles();
  return (
    <Layout>
      <Box className={classes.image}>
       <Box display="flex" justifyContent='flex-end' pt={1} width='100%' zIndex='999'>
       <AccountButton ></AccountButton>
       <ShoppingCartButton></ShoppingCartButton>
      </Box> 
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        className={classes.root}
      >      
          <MainArticles></MainArticles>
      </Box>
    </Layout>
  );
}

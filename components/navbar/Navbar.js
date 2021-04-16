import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ShoppingCartButton from '../buttons/ShoppingCart';
import AccountButton from '../buttons/Account';
import SearchNavbar from './Search'

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
}));



export default function ButtonAppBar() {
  const classes = useStyles();
  const trigger = useScrollTrigger({disableHysteresis: true});

  return (
    <Slide className={classes.root} in={trigger}>
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Logo
          </Typography>
          <SearchNavbar></SearchNavbar>
          <AccountButton color="inherit"></AccountButton>
          <ShoppingCartButton color="inherit"></ShoppingCartButton>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
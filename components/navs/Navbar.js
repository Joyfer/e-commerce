import Link from "next/link"

import { makeStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar, Typography, Hidden } from '@material-ui/core'

import ShoppingCartButton from '../buttons/ShoppingCart';
import AccountButton from '../buttons/Account';
import MenuBrands from '../buttons/MenuBrands'
import SearchNavbar from './Search';
import MenuButton from './MenuButton';

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
      <AppBar position="fixed" elevation={1}>
        <Toolbar>
          <Hidden mdUp>
         <MenuButton />
          </Hidden>
          <Typography variant="h6" className={classes.title}>
          <Link href="/">
           <a>Logo</a> 
          </Link>
          </Typography>
          <Hidden smDown>
          <SearchNavbar></SearchNavbar>
          </Hidden>
          <Hidden smDown>
          <MenuBrands></MenuBrands>
          </Hidden>
          <AccountButton></AccountButton>
          <ShoppingCartButton></ShoppingCartButton>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, Hidden } from "@material-ui/core";

import ShoppingCartButton from "../buttons/navigation/ShoppingCart";
import AccountButton from "../buttons/navigation/Account";
import MenuBrands from "../buttons/navigation/MenuBrands";
import SearchNavbar from "./Search";
import MenuButton from "../buttons/navigation/MenuButton";
import LogoButton from "../buttons/navigation/Logo";
import ButtonNavigationNav from "../buttons/navigation/ButtonNavigationNav";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  return (
    <Slide className={classes.root} in={trigger}>
      <AppBar position="fixed" elevation={1}>
        <Toolbar>
          <MenuButton />
          <LogoButton />
          <Hidden smDown>
            <SearchNavbar />
          </Hidden>
          <ButtonNavigationNav text="Inicio" />
          <MenuBrands />
          <AccountButton />
          <ShoppingCartButton />
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

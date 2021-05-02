import { Box, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";

import AccountButton from "../buttons/navigation/Account";
import ButtonIconWhite from "../buttons/navigation/ButtonIconWhite";
import MenuBrands from "../buttons/navigation/MenuBrands";
import ButtonNavigationNav from "../buttons/navigation/ButtonNavigationNav";
import MenuButton from "../buttons/navigation/MenuButton";
import LogoButton from "../buttons/navigation/Logo";
import SearchNavbar from "./Search";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

const NavigationButtons = ({ search }) => {
    const classes = useStyles();
  return (
    <>
      <Box display="flex" alignItems="center" className={classes.root}>
        <MenuButton />
        <LogoButton />
      </Box>
      {search ? (
        <Hidden smDown>
          <SearchNavbar />
        </Hidden>
      ) : (
        <></>
      )}
      <Box display="flex">
        <ButtonNavigationNav text="Inicio" link="/" />
        <Hidden smUp>
          <ButtonIconWhite icon={<HomeIcon />} link="/" />
        </Hidden>
        <MenuBrands />
        <AccountButton />
        <Hidden smDown>
          <ButtonIconWhite icon={<ShoppingCartIcon />} link="/profile" />
        </Hidden>
      </Box>
    </>
  );
};

export default NavigationButtons;

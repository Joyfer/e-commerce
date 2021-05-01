import { Box } from "@material-ui/core";

import MenuButton from "../buttons/navigation/MenuButton";
import AccountButton from "../buttons/navigation/Account";
import ShoppingCartButton from "../buttons/navigation/ShoppingCart";
import MenuBrands from "../buttons/navigation/MenuBrands";
import LogoButton from "../buttons/navigation/Logo";

const InitialNav = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      py={1}
      width="100%"
      zIndex="999"
      px={2}
    >
      <Box display="flex" alignItems="center">
        <MenuButton />
        <LogoButton />
      </Box>
      <Box display="flex">
        <MenuBrands></MenuBrands>
        <AccountButton></AccountButton>
        <ShoppingCartButton></ShoppingCartButton>
      </Box>
    </Box>
  );
};

export default InitialNav;

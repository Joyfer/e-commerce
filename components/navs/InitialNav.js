import { Box } from "@material-ui/core"

import MenuButton from './MenuButton';
import AccountButton from "../buttons/Account";
import ShoppingCartButton from "../buttons/ShoppingCart";
import MenuBrands from "../buttons/MenuBrands";

const InitialNav = () => {
    return ( 
        <Box
        display="flex"
        justifyContent="space-between"
        pt={1}
        width="100%"
        zIndex="999"
        px={2}
      > 
      <Box>
      <MenuButton />
      </Box>
      <Box display="flex">
        <MenuBrands></MenuBrands>
        <AccountButton></AccountButton>
        <ShoppingCartButton></ShoppingCartButton>
      </Box>
      </Box>
     );
}
 
export default InitialNav;
import { Box } from "@material-ui/core"

import AccountButton from "../buttons/Account";
import ShoppingCartButton from "../buttons/ShoppingCart";
import MenuBrands from "../buttons/MenuBrands";

const InitialNav = () => {
    return ( 
        <Box
        display="flex"
        justifyContent="flex-end"
        pt={1}
        width="100%"
        zIndex="999"
      >
        <MenuBrands></MenuBrands>
        <AccountButton></AccountButton>
        <ShoppingCartButton></ShoppingCartButton>
      </Box>
     );
}
 
export default InitialNav;
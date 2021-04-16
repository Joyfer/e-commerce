import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { grey } from '@material-ui/core/colors';

const ShoppingCartButton = () => {
    return (
        <IconButton aria-label="">
            <ShoppingCartIcon style={{ color: grey[50] }} />
        </IconButton>
      );
}
 
export default ShoppingCartButton;
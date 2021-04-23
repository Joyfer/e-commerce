import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const AddCart = () => {
    return ( 
        <Button variant="text" color="secondary" endIcon={<ShoppingCartIcon />}>
        AÑADIR
        </Button>
     );
}
 
export default AddCart;
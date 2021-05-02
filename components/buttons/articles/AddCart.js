import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const AddCart = () => {
    return ( 
        <Button variant="text" color="secondary" endIcon={<AddShoppingCartIcon />}>
        AÑADIR
        </Button>
     );
}
 
export default AddCart;
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const AddCart = ({padding = 0}) => {
    return (
        <Box px={padding}> 
        <Button variant="text" color="secondary" endIcon={<AddShoppingCartIcon />}>
        AÑADIR
        </Button>
        </Box>
     );
}
 
export default AddCart;
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
      color: 'white'
    }
  });

const ShoppingCartButton = (props) => {
    const classes = useStyles(props);

    return (
        <IconButton aria-label="" className={classes.button}>
            <ShoppingCartIcon  />
        </IconButton>
      );
}
 
export default ShoppingCartButton;
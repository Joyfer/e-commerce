import { Button } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles"
import { red } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[600]),
    backgroundColor: red[600],
    '&:hover': {
      backgroundColor: red[800],
    },
  },
}))(Button);

const LogoutButton = () => {
    return ( 
        <ColorButton variant="contained">Cerrar sesión</ColorButton>
     );
}
 
export default LogoutButton;
import { useState } from 'react'
import Button from '@material-ui/core/Button'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { grey } from '@material-ui/core/colors';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    logout: {
      color: 'red',
    },
    button: {
      color: 'white'
    }
  });

const AccountButton = (props) => {
    const classes = useStyles(props);

    const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <>
        <Button className={classes.button} aria-haspopup="true" aria-controls="simple-menu" 
        onClick={handleClick} startIcon={<AccountCircleIcon style={{ color: grey[50] }} />}>
          Joyfer
        </Button>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose}>Profile</MenuItem>
  <MenuItem onClick={handleClose} className={classes.logout}>Logout</MenuItem>
</Menu>
      </>
      );
}
 
export default AccountButton;
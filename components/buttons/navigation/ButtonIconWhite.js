import Link from "next/link"
import { IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
      color: 'white'
    }
  });
  

const ButtonIconWhite = ({ icon, link }) => {
    const classes = useStyles();
    return (
      <Link href={link}>
        <IconButton aria-label="" className={classes.button}>
          {icon}
        </IconButton>
      </Link>
      );
}
 
export default ButtonIconWhite;
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
const useStyles = makeStyles({
      mainImage: {
        width: '100%',
        height: '70vh',
        objectFit: 'cover'
      }
  });


const MainImage = (props) => {
    const classes = useStyles(props);

    return ( 
    <Box position='relative'>
  <img className={classes.mainImage} src="https://i.imgur.com/NOPvS1X.jpg" alt=""/>
        </Box>
     );
}
 
export default MainImage;
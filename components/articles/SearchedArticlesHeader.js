import { makeStyles } from "@material-ui/core/styles";

import {Box, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.up("sm")]: {
        paddingRight: 125,
        paddingLeft: 125,
      },
      [theme.breakpoints.down("sm")]: {
        paddingRight: 15,
        paddingLeft: 15,
      },
    },
    title: {
      marginTop: 25,
    },
    subtitle: {
      paddingBottom: 12,
      border: 0,
      borderBottom: "thick solid #556cd6",
    },
  }));

const SearchedArticlesHeader = () => {
    const classes = useStyles();
    return ( 
        <Box width="100%" className={classes.root}>
        <Typography
          className={classes.title}
          variant="h6"
          color="initial"
          align="center"
        >
          Estás viendo:
        </Typography>
        <Typography
          className={classes.subtitle}
          variant="h2"
          color="initial"
          align="center"
        >
          Nike
        </Typography>
        </Box>
     );
}
 
export default SearchedArticlesHeader;
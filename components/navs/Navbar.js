import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

import NavigationButtons from "./NavigationButtons"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  return (
    <Slide className={classes.root} in={trigger}>
      <AppBar position="fixed" elevation={1}>
        <Toolbar>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

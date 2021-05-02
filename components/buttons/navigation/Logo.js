import Link from "next/link";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginLeft: 5,
  },
}));

const LogoButton = () => {
  const classes = useStyles();
  return (
    <Typography variant="h6" className={classes.title}>

        <a>Logo</a>
      
    </Typography>
  );
};

export default LogoButton;

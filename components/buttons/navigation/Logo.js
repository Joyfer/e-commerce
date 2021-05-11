import Link from "next/link";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 4,
  },
}));

const LogoButton = () => {
  const classes = useStyles();
  return (
    <Typography variant="h5" className={classes.title}>
      <Link href="/">
        Logo
      </Link>
    </Typography>
  );
};

export default LogoButton;

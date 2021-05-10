import { useRouter } from "next/router";

import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.error.main ,
  },
}));

const BackButton = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <IconButton
      aria-label=""
      className={classes.button}
      onClick={() => router.back()}
    >
      <ArrowLeftIcon />
    </IconButton>
  );
};

export default BackButton;

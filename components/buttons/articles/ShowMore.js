import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(() => ({
    button: {
      width: "100%",
      marginTop: 20,
    },
  }));

const ShowMore = () => {
    const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="text"
      color="secondary"
      endIcon={<ExpandMoreIcon />}
    >
      Ver más
    </Button>
  );
};

export default ShowMore;

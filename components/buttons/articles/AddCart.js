import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AlertSnack from "../../alerts/AlertSnack";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
  myButton: {
    width: "100%"
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const AddCart = ({ padding = 0 }) => {
  const classes = useStyles();
  //Loading functions
  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setLoading(false);
        handleClick();
      }, 2000);
    }
  };
  //Snackbar functions
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box px={padding} className={classes.wrapper}>
      <Button
        variant="text"
        color="secondary"
        className={classes.myButton}
        endIcon={<AddShoppingCartIcon />}
        disabled={loading}
        onClick={handleButtonClick}
      >
        Añadir
      </Button>
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
      <AlertSnack
        open={open}
        handleClose={handleClose}
        message={"Añadido al carrito"}
      />
    </Box>
  );
};

export default AddCart;

import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";

import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    width: "100%",
  },
  boxWidth: {
    width: "40%",
    [theme.breakpoints.down("sm")]: {
        width: "80%"
      },
  }
}));

const BuyArticle = ({ padding = 0 }) => {
  const classes = useStyles();
  return (
    <Box px={padding}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<LocalMallOutlinedIcon />}
      >
        Comprar
      </Button>
    </Box>
  );
};

export default BuyArticle;

import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(() => ({
  button: {
    width: "100%",
    marginTop: 20,
  },
}));

const ShowMore = ({link}) => {
  const classes = useStyles();
  return (
    <Link href={{ pathname: "/search/[brand]", query: { brand: link }}}>
      <Button
        className={classes.button}
        variant="text"
        color="secondary"
        endIcon={<ExpandMoreIcon />}
      >
        Ver más
      </Button>
    </Link>
  );
};

export default ShowMore;

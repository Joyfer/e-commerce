import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  divScroll: {
    overflowX: "auto",
    minWidth: "60%",
    whiteSpace: "nowrap",
    display: "flex",
    justifyContent: "center",
  },
  margin: {
    margin: "auto",
  },
  chip: {
    margin: "0 4px",
  },
}));

const ChipGroup = () => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center" py={2}>
      <div className={classes.divScroll}>
        <Link href="/search/nike" passHref>
          <Chip
            label="nike"
            color="primary"
            clickable
            className={classes.chip}
          />
        </Link>
      </div>
    </Box>
  );
};

export default ChipGroup;

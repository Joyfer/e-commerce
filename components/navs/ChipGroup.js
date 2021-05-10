import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  divScroll: {
    overflowX: "auto",
    whiteSpace: "nowrap",
    "&::-webkit-scrollbar": {
      width: 0,
      background: "transparent",
    },
  },
  chip: {
    margin: "0 4px",
    padding: 5
  },
}));

const ChipGroup = ({ chips }) => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center" pt={4} pb={2}>
      <div className={classes.divScroll}>
        {chips.map((el) => {
          return (
            <Link href={`/search/${el}`} passHref key={el}>
              <Chip
                label={el}
                color="primary"
                clickable
                className={classes.chip}
              />
            </Link>
          );
        })}
      </div>
    </Box>
  );
};

export default ChipGroup;

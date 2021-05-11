import CartListLink from "./CartListLink";

import { List, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  boxList: {
    height: 280,
    overflow: "scroll",
    overflowX: "hidden",
  },
}));

const CartArticles = ({ list }) => {
  const classes = useStyles();

  return (
    <Box my={1} className={classes.boxList}>
      <List>
        {list.map(({ id, name, price, images }) => {
          return (
            <CartListLink
              key={id}
              id={id}
              name={name}
              price={price}
              images={images[0]}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default CartArticles;

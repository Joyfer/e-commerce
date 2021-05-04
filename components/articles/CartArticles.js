import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  ListItemAvatar,
  IconButton,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  boxList: {
    height: 280,
    overflow: "scroll",
    overflowX: "hidden",
  },
}));

const CartArticles = () => {
  const classes = useStyles();
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
  return (
    <Box my={1} className={classes.boxList}>
      <List>
        <ListItemLink>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Nike Retro 1" secondary="300$" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItemLink>
      </List>
    </Box>
  );
};

export default CartArticles;

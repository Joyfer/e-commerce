import React from "react";
import Link from "next/link";

import {
  ListItem,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  ListItemAvatar,
  IconButton,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";

const CartListLink = React.forwardRef(
  ({ id, name, price, images }, ref) => {
    return (
      <Link href={`/article/${id}`} passHref>
        <ListItem button ref={ref}>
          <ListItemAvatar>
            <Avatar src={images}></Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} secondary={`${price}$`} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Link>
    );
  }
);

export default CartListLink;

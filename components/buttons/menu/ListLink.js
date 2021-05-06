import React from "react";
import Link from "next/link";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';

const ListLink = React.forwardRef(
  ({ link, label, listItemIcon = <RemoveOutlinedIcon /> }, ref) => {
    return (
      <Link href={link} passHref>
        <ListItem button ref={ref}>
          <ListItemIcon>{listItemIcon}</ListItemIcon>
          <ListItemText primary={label} />
        </ListItem>
      </Link>
    );
  }
);

export default ListLink;

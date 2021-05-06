import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";

import ListLink from "./ListLink";

import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const ListSubheaderFunction = ({ label }) => {
  return (
    <ListSubheader component="div" id={`${label}-nested-list-subheader`}>
      {label}
    </ListSubheader>
  );
};

const ListDrawerLink = ({ functionToggleDrawer }) => {
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={functionToggleDrawer}
      onKeyDown={functionToggleDrawer}
    >
      <List subheader={<ListSubheaderFunction label="Páginas" />}>
        <ListLink link={"/"} label="Home" listItemIcon={<HomeIcon />} />
        <ListLink link={"/profile"} label="Perfil" listItemIcon={<AccountCircleIcon />} />
      </List>
      <List subheader={<ListSubheaderFunction label="Categorias" />}>
        {["Nike", "Adidas", "Vans", "RS21"].map((el, index) => {
          return (
            <ListLink
              key={index}
              link={{ pathname: "/search/[brand]", query: { brand: `${el}` } }}
              label={`${el}`}
            />
          );
        })}
      </List>
      <Divider variant="middle" />
    </div>
  );
};

export default ListDrawerLink;

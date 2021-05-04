import Link from "next/link";
import React from 'react'

import { MenuItem } from "@material-ui/core";

const MenuLink = React.forwardRef(({link, label, onChildClick}, ref) => {
  return <Link href={link}><MenuItem ref={ref} onClick={onChildClick} >{label}</MenuItem></Link>;
});

export default MenuLink;

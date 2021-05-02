import Link from "next/link";
import React from 'react'

import { MenuItem } from "@material-ui/core";

const MenuLink = React.forwardRef((props, ref) => {
  return <Link href="/profile"><MenuItem ref={ref} {...props}></MenuItem></Link>;
});

export default MenuLink;

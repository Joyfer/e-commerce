import React from 'react'
import { Menu } from '@material-ui/core'

const MuiMenu = React.forwardRef((props, ref) => {
    return <Menu  ref={ref} {...props} />;
  });
 
export default MuiMenu;
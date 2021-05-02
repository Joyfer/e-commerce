import { Box } from "@material-ui/core";
import NavigationButtons from "./NavigationButtons";


const InitialNav = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      py={1}
      width="100%"
      zIndex="999"
      px={2}
    >
      <NavigationButtons />
    </Box>
  );
};

export default InitialNav;

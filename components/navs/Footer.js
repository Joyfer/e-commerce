import { Box, Slide } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import useWindowDimensions from "../../hooks/isEndOfScroll";

const Footer = () => {
  const isEnd = useWindowDimensions();

  return (
    <Slide direction="up" in={isEnd}>
      <Box
        textAlign="center"
        height={100}
        bgcolor="text.primary"
        color="white"
        mt={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="fixed"
        bottom="0"
        width="100%"
      >
        <Link
          href="https://joyferr-web.netlify.app/"
          color="inherit"
          variant="body1"
          target="_blank"
        >
          Next e-commerce || Joyfer || I hope you enjoy
        </Link>
      </Box>
    </Slide>
  );
};

export default Footer;

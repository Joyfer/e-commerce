import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  bottom: {
    position: 'absolute',
    bottom: 0
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box
      textAlign="center"
      height={100}
      bgcolor="text.primary"
      color="white"
      mt={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Link href="#" color="inherit" variant="body1">
        Next e-commerce || Joyfer || I hope you enjoy
      </Link>
    </Box>
  );
};

export default Footer;

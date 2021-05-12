import Snackbar from "@material-ui/core/Snackbar";

export default function AlertSnack({ open, handleClose, message }) {

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      message={message}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    ></Snackbar>
  );
}

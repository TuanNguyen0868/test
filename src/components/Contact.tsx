import MdPhone from "@mui/icons-material/Phone";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";

const theme = createTheme({
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          boxSizing: "content-box",
          padding: 3,
          fontSize: "1.125rem",
        },
      },
    },
  },
});

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Contact
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Contact"}</DialogTitle>
        <DialogContent style={{ height: 150, width: 300 }}>
          <DialogContentText id="alert-dialog-description">
            SDT : 0969696969
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <ThemeProvider theme={theme}>
              <Chip icon={<MdPhone />} label="Call me" />
            </ThemeProvider>
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

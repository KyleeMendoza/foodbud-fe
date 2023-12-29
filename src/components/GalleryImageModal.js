import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  textAlign: "center",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function GalleryImageModal({ data, item }) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    const index = data.indexOf(item);
    setIndex(index);
    // console.log("index: ", index);
  }, []);

  return (
    <>
      <img
        src={item}
        alt=""
        className="w-full h-full rounded-lg cursor-pointer"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p>{item}</p>
          <p>{`Index: ${index}`}</p>
        </Box>
      </Modal>
    </>
  );
}

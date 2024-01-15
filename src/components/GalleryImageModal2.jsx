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

export default function GalleryImageModal2({ item }) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //   React.useEffect(() => {
  //     console.log(item);
  //   }, []);

  //img converter
  function convertDriveLinkToLH3(link) {
    const regex = /https:\/\/drive\.google\.com\/uc\?id=(.*)/;
    const match = link.match(regex);

    if (match && match[1]) {
      const fileId = match[1];
      const lh3Link = `https://lh3.google.com/u/0/d/${fileId}`;
      return lh3Link;
    } else {
      console.error("Invalid Google Drive shareable link format");
      return link;
    }
  }

  return (
    <>
      <img
        src={convertDriveLinkToLH3(item.image)}
        // src={item.image}
        alt={`Image ${index}`}
        className="rounded-lg"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Edit this according to your liking. */}
        <Box sx={style}>
          <div className="flex gap-2">
            <div className="w-60">
              <img
                src={convertDriveLinkToLH3(item.image)}
                alt={`Image ${index}`}
                className="rounded-lg"
                onClick={handleOpen}
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-2 font-['Poppins']">
              <p className="font-normal">
                <span className="font-bold">Package Type:</span>
                {item.package_type}
              </p>

              <p className="font-normal ">
                <span className="font-bold">Event Type:</span> {item.event_type}
              </p>
              <p className="font-normal ">
                <span className="font-bold">Theme:</span> {item.theme}
              </p>
              <p className="font-normal ">
                <span className="font-bold">Gender:</span>{" "}
                {item.celebrant_gender}
              </p>
              <p className="font-normal ">
                <span className="font-bold">Age:</span>{" "}
                {item.celebrant_age || "None"}
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

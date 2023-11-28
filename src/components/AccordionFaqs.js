import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  //   border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "0.9rem", marginLeft: "2rem" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#F9E5F2", // Change this line to set the background color to #F9E5F2
  flexDirection: "row-reverse",
  padding: theme.spacing(2), // Adjust the value as needed
  borderTopLeftRadius: theme.spacing(2), // Adjust the value for top left corner radius
  borderTopRightRadius: theme.spacing(2), // Adjust the value for top right corner radius
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(4),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  borderBottomLeftRadius: theme.spacing(2), // Adjust the value for top left corner radius
  borderBottomRightRadius: theme.spacing(2), // Adjust the value for top right corner radius
}));

export default function AccordionFaqs() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="flex flex-col gap-4">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography
            className="text-primary-500"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            How to Book?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#F9E5F2]">
          <Typography className="text-[#1261A6]">
          <p>To book our catering services, follow these easy steps: </p>
          <p><br />• Read FIRST the terms & conditions. And Pay a reservation fee of ₱5,000 to secure your date.</p>
          <p><br />• Fill out our reservation form and send it to us.</p>
          <p><br />• We'll schedule a meeting to discuss and clarify details, as well as arrange a convenient time for a food tasting (delivery only).</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography
            className="text-primary-500"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            What is your cancellation policy or can I ask for a refund?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#F9E5F2]">
          <Typography className="text-[#1261A6]">
          Our cancellation policy / no refund is outlined in our contract. 
          Please refer to our terms and conditions or contact us for more information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography
            className="text-primary-500"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            What types of events do you cater to?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#F9E5F2]">
          <Typography className="text-[#1261A6]">
          We cater to a wide range of events, including weddings, corporate gatherings, birthdays, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography
            className="text-primary-500"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            Where is your office located?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#F9E5F2]">
        <Typography className="text-[#1261A6]">
    Food Bud Events and Catering (Main Office)1423 Caloocan, Philippines 
    <p><br />Note: Office visit is strictly for contract signing, clarifications about the package and payments only and by appointment basis.</p>
  </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography
            className="text-primary-500"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            Which areas do you cover for event catering?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#F9E5F2]">
          <Typography className="text-[#1261A6]">
          We can cater any events within NCR and nearby provinces
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography
            className="text-primary-500"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            How can I get in touch with you for inquiries or to discuss my event
            catering needs?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#F9E5F2]">
          <Typography className="text-[#1261A6]">
          For inquiries or to discuss your event catering needs, feel free to send us a message on our Facebook page. 
          We strive to respond promptly and look forward to assisting you with your event plans
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography
            className="text-primary-500"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            Do you provide a tasting session before finalizing the menu?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#F9E5F2]">
          <Typography className="text-[#1261A6]">
          Yes, we offer tasting sessions to help you choose the perfect menu for your event. 
          Contact us so we can set an appointment with you
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography
            className="text-primary-500"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            How far in advance should I book your catering services for my
            event?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#F9E5F2]">
          <Typography className="text-[#1261A6]">
          It's recommended to book our services as early as possible to ensure availability, especially for peak seasons. 
          Contact us to check our current schedule and secure your date.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordianSummary from "@mui/material/AccordionSummary";
import AccordianDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"}>
      <Header title={"FAQ"} subTitle={"Frequently Asked Questions Page"} />
      <Accordion defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important Question
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa et,
            exercitationem facilis veniam, unde enim dolore inventore saepe nam
            vel suscipit deleniti eaque a ea voluptates eius repudiandae dolorem
            aspernatur.
          </Typography>
        </AccordianDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            FAQ Question
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa et,
            exercitationem facilis veniam, unde enim dolore inventore saepe nam
            vel suscipit deleniti eaque a ea voluptates eius repudiandae dolorem
            aspernatur.
          </Typography>
        </AccordianDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Info need Question
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa et,
            exercitationem facilis veniam, unde enim dolore inventore saepe nam
            vel suscipit deleniti eaque a ea voluptates eius repudiandae dolorem
            aspernatur.
          </Typography>
        </AccordianDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;

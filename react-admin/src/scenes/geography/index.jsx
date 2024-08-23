import Header from "../../components/Header";
import { Box, colors } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  return (
    <Box m={"20px"}>
      <Header title={"Geography Chart"} subTitle={"Geography Bar Chart"} />
      <Box
        height={"75vh"}
        border={`1px sold ${colors.grey[100]}`}
        borderRadius={"4px"}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;

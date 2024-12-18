import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import Geography from "../geography";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import GeographyChart from "../../components/GeographyChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header
          title={"DASHBOARD"}
          subTitle={"Welcome to your dashboard"}
        ></Header>

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            DOWNLAOD REPORTS
          </Button>
        </Box>
      </Box>
      {/* GRID & CHARTS */}
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12,1fr)"}
        gridAutoRows={"140px"}
        gap={"20px"}
      >
        {/* ROW 1 */}
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title={"12,321"}
            subTitle={"Email sent"}
            progress={"0.75"}
            increase={"+14%"}
            icon={
              <EmailIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title={"12,321"}
            subTitle={"Sales Obtained"}
            progress={"0.5"}
            increase={"+21%"}
            icon={
              <PointOfSaleIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title={"163,321"}
            subTitle={"New Clients"}
            progress={"0.35"}
            increase={"+5%"}
            icon={
              <PersonAddIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title={"22,321"}
            subTitle={"Traffic Inbound"}
            progress={"0.80"}
            increase={"+43%"}
            icon={
              <TrafficIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        {/* ROW 2 */}
        <Box
          gridColumn={"span 8"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt={"25px"}
            p={"0 30px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight={"600"}
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight={"bold"}
                color={colors.greenAccent[500]}
              >
                $54,423,32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{
                    fontSize: "26px",
                    color: colors.greenAccent[500],
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height={"250px"} mt={"-20px"}>
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* TRANSACTIONS  */}
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          overflow={"auto"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p={"15px"}
          >
            <Typography
              color={colors.grey[100]}
              variant="h5"
              fontWeight={"600"}
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transactions, i) => (
            <Box
              key={`${transactions.txId}-${i}`}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={`4px solid ${colors.primary[500]}`}
              color={colors.grey[100]}
              p={"15px"}
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight={"600"}
                >
                  {transactions.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transactions.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transactions.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p={"5px 10px"}
                borderRadius={"4px"}
              >
                {transactions.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/* ROW 3 */}
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          p={"30px"}
        >
          <Typography variant="h5" fontWeight={"600"}>
            Campaign
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px " }}
            >
              $34,322 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        {/*  */}
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight={"600"}
            sx={{
              p: "30px",
            }}
          >
            Sales Quantity
          </Typography>
          <Box height={"250px"} mt={"-20px"}>
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          p={"30px"}
        >
          <Typography
            variant="h5"
            fontWeight={"600"}
            sx={{
              mb: "15px",
            }}
          >
            Geography Based Traffic
          </Typography>
          <Box height={"200px"} mt={"-20px"}>
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

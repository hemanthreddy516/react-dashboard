import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Forms from "./scenes/forms";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();

  // const routes = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Dashboard />,
  //   },
  //   {
  //     path: "/team",
  //     element: <Team />,
  //   },
  //   {
  //     path: "/contacts",
  //     element: <Contacts />,
  //   },
  //   {
  //     path: "/invoices",
  //     element: <Invoices />,
  //   },
  //   {
  //     path: "/form",
  //     element: <Form />,
  //   },
  //   { path: "/line", element: <Line /> },
  //   { path: "/pie", element: <Pie /> },
  //   { path: "/faq", element: <FAQ /> },
  //   { path: "/geography", element: <Geography /> },
  //   { path: "/calendar", element: <Calendar /> },
  // ]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <TopBar />
            {/* <RouterProvider router={routes}></RouterProvider> */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Forms />} />
              {/*  <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

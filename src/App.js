import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemsProvider from "./context/ItemsProvider";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import { Grid } from "@mui/material";

function App() {
  return (
    <Router>
      <ItemsProvider>
        <Grid container direction="column">
          <Grid
            item
            lg={10}
            xs={10}
            sx={{ flexGrow: 1, position: "relative", margin: 0 }}
          >
            <Routes>
              <Route path="/" exact element={<Users />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Grid>
          <Grid item lg={2} xs={2} sx={{ position: "relative", bottom: 0 }}>
            <Footer />
          </Grid>
        </Grid>
      </ItemsProvider>
    </Router>
  );
}

export default App;

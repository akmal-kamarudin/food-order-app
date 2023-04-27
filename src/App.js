import { useContext } from "react";
import "./App.css";
import ItemsContext from "./context/ItemsContext";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import { Grid, Button, Box } from "@mui/material";

function App() {
  const itemsCtx = useContext(ItemsContext);
  return (
    <>
      <Grid container direction="column">
        <Grid item lg={10} sx={{ flexGrow: 1, position: "relative", margin: 0 }}>
          {/* {itemsCtx.switchPage ? <Users /> : <Admin />} */}
          <Users />
        </Grid>
        <Grid item lg={2} sx={{ position: "relative", bottom: 0 }}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default App;

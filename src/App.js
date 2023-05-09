import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemsProvider from "./context/ItemsProvider";
import CartProvider from "./context/CartProvider";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import { Grid } from "@mui/material";

function App() {
  return (
    <Router>
      <ItemsProvider>
        <CartProvider>
          <Grid container direction="column">
            <Grid item>
              <Routes>
                <Route path="/" exact element={<Users />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </Grid>
            <Grid item>
              <Footer />
            </Grid>
          </Grid>
        </CartProvider>
      </ItemsProvider>
    </Router>
  );
}

export default App;

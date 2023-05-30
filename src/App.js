import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from '@mui/material';

import MiniDrawer from './components/SideBar';
import Dashboard from './Pages/Dashboard/index';
import Inventory from './Pages/Inventory/index';
import Orders from './Pages/Orders/index';
import Customers from './Pages/Customers';
import DataContext from "./Dynamic Data/dataContext";

function App() {
  return (
    <DataContext>
      <Container sx={{ backgroundColor: "rgb(214, 233, 248)" }} maxWidth="ls">
        <Router>
          <MiniDrawer />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Customers" element={<Customers />} />
          </Routes>
        </Router>
      </Container>
    </DataContext>
  );
}

export default App;
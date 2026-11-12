import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppProvider from "./AppProvider";
import Nav from "./components/Nav";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
        {/* <ChatBot /> */}
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

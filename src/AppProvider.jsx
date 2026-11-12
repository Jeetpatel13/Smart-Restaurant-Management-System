import { createContext, useState } from "react";
import { menuItems } from "./data";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [menu, setMenu] = useState(menuItems);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  const [reservations, setReservations] = useState([]);

  return (
    <AppContext.Provider
      value={{
        menu,
        setMenu,
        cart,
        setCart,
        order,
        setOrder,
        reservations,
        setReservations,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

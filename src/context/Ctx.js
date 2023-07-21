import React, { createContext, useState } from "react";

export const globalContext = createContext();

const Ctx = ({ children }) => {
  const [modalState, setModalState] = useState(false);
  const [winW, setWinW] = useState(window.innerWidth <= "990" ? false : true);
  const [cart, setCart] = useState([]);
  const [totalPriceCart, setTotalPriceCart] = useState(0);
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  
  function windowWidth() {
    if (window.innerWidth <= "990") {
      return setWinW(false);
    }
    return setWinW(true);
  }
  window.addEventListener("resize", windowWidth);

  return (
    <globalContext.Provider
      value={{
        windowW: [winW, setWinW],
        modal: [modalState, setModalState],
        cartData: [cart, setCart],
        price: [totalPriceCart, setTotalPriceCart],
        usersArr: [users, setUsers],
        uName: [userName, setUserName],
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default Ctx;

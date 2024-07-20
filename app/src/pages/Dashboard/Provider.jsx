// DashboardContext.js
import React, { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [activeCard, setActiveCard] = useState({});

  // Function to update active card details
  const updateActiveCard = (cardDetails) => {
    setActiveCard(cardDetails);
  };

  return (
    <DashboardContext.Provider value={{ activeCard, updateActiveCard }}>
      {children}
    </DashboardContext.Provider>
  );
};
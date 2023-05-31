import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <AppContext.Provider value={{ activeTab, handleTabClick }}>
      {children}
    </AppContext.Provider>
  );
};
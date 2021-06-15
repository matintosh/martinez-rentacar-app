import React, {createContext, useEffect, useState} from 'react';
import useCarsContext from './Cars';

export const AppContext = createContext(null);

const AppContextContainer = ({children}) => {
  const {cars, fetchCars, loading: carsLoading} = useCarsContext();

  const loading = carsLoading;
  const context = {
    loading,
    cars,
    fetchCars,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContextContainer;

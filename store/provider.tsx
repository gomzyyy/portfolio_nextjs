"use client";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "@/store/store";
import { persistStore } from "redux-persist";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const [persistor, setPersistor] = useState<any>(null);

  useEffect(() => {
    setPersistor(persistStore(store)); // Initialize persistor on mount
  }, []);

  if (!persistor) {
    // You can render a loading state here while persistor is being initialized
    return <div>Loading...</div>; 
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;

"use client";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store/store";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const Loader = () => {
    return (
      <div className="fixed inset-0 flex-1 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div className="text-white text-lg flex items-center justify-center space-x-2">
          <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          <span>Loading...</span>
        </div>
      </div>
    );
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;

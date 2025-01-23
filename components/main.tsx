"use client";
import { persistor, store } from "@/store/store";
import React from "react";
import {Provider} from "react-redux"
import { PersistGate } from "redux-persist/integration/react";

function Main({ children }: { children: React.ReactNode }) {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <main className="flex-1 overflow-auto">{children}</main>
      </PersistGate>
    </Provider>
        
  );
}

export default Main;

"use client";

import useDeviceDetection from "@/hooks/useDeviceDetection";
import { createContext } from "react";

const DeviceContext = createContext({});

export default function DeviceProvider({ children }) {
  const isMobile = useDeviceDetection();
  console.log(isMobile);

  return (
    <DeviceContext.Provider value="dark">
      {isMobile === "Mobile" ? <div>Not Found</div> : <>{children}</>}
    </DeviceContext.Provider>
  );
}

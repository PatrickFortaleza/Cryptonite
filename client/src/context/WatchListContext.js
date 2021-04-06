import React, { useContext, useEffect, useState } from "react";
import useAsyncStorage from "../hooks/useAsyncStorage";

const WatchListContext = React.createContext();

export function useWatchList() {
  return useContext(WatchListContext);
}

export function WatchListProvider({ children }) {
  // const [watchListData, setWatchListData] = useState(["bitcoin"]);
  const [watchListData, setWatchListData] = useAsyncStorage("watchListData", []);
  

  const valueOne = {
    setWatchListData,
    watchListData,
 
  };



  return <WatchListContext.Provider value={valueOne}>{children}</WatchListContext.Provider>;
}

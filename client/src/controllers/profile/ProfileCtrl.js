import React, { useState, useEffect } from "react";
import Profile from "../../components/profile/Profile";
import { useAuth } from "../../context/AuthContext";
import { getMarkets } from "../../network";

export default function ProfileCtrl() {
  const authContext = useAuth();
  const [markets, setMarkets] = useState([]);
  const [marketsLoaded, setMarketsLoaded] = useState(false);
  const maxMarkets = 5;

  const queryMarkets = async () => {
    setMarketsLoaded(false);
    const result = await getMarkets();
    await setMarketsLoaded((bool) => (bool = true));
    if (!result || result.error) {
      setMarkets([]);
      return;
    }
    setMarkets(result.slice(0, maxMarkets));
  };

  useEffect(() => {
    queryMarkets();
  }, []);

  const { profileData } = authContext;

  return (
    <Profile
      user={profileData}
      marketsLoaded={marketsLoaded}
      markets={markets}
    />
  );
}

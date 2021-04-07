import React, { useState, useEffect } from "react";
import Profile from "../../components/profile/Profile";
import { useAuth } from "../../context/AuthContext";
import { getMarkets } from "../../network";

export default function ProfileCtrl({ navigation }) {
  const authContext = useAuth();
  const [marketsLoaded, setMarketsLoaded] = useState(false);
  const [portfolioPositions, setPortfolioPositions] = useState([]);
  const { profileData } = authContext;

  const navigateToDetail = ({ crypto }) => {
    navigation.navigate("CryptoDetail", { crypto: crypto });
  };

  const navigateToTransactions = () => {
    navigation.navigate("Transactions");
  };

  const queryMarkets = async () => {
    setMarketsLoaded(false);
    const result = await getMarkets();
    await setMarketsLoaded((bool) => (bool = true));
    if (!result || result.error) {
      console.log("error querying markets");
      setMarkets([]);
      return;
    }

    const positions = await profileData.positions;
    const positions_ = [...positions].map((position) => {
      const foundCrypto = result.filter(
        (cryptoData) => position.coin === cryptoData.id
      )[0];
      position.cryptoData = foundCrypto;
      return position;
    });

    setPortfolioPositions(positions_);
  };

  useEffect(() => {
    profileData ? queryMarkets() : null;
  }, [profileData]);

  return (
    <Profile
      user={profileData}
      marketsLoaded={marketsLoaded}
      portfolioPositions={portfolioPositions}
      navigateToDetail={navigateToDetail}
      navigateToTransactions={navigateToTransactions}
    />
  );
}

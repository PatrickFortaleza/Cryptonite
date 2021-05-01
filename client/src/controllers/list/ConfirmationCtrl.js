import React, { useState, useEffect } from "react";
import Confirmation from "../../components/list/Confirmation";
import { useAuth } from "../../context/AuthContext";

export default function ConfirmationCtrl({
  // PROPERTIES
  transaction,
  navigation,
  user,
}) {
  const authContext = useAuth();
  const [portfolioStats, setPortfolioStats] = useState({});
  const { profileData } = authContext;
  const { positions } = profileData;

  const findEvaluatePortfolioStat = () => {
    if (!transaction || !transaction.crypto || !transaction.crypto.id) return;
    const foundStat = positions.filter(
      (position) => position.coin === transaction.crypto.id
    )[0];
    if (!foundStat) setPortfolioStats({});
    setPortfolioStats(foundStat);
  };

  useEffect(() => {
    positions.length > 0 ? findEvaluatePortfolioStat() : null;
  }, [positions]);
  return (
    <Confirmation
      //PROPERTIES
      transaction={transaction}
      navigation={navigation}
      portfolioStats={portfolioStats}
      user={user}
    />
  );
}

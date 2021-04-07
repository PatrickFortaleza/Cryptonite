import React from "react";
import Transactions from "../../components/profile/Transactions";
import { useAuth } from "../../context/AuthContext";

export default function TransactionsCtrl() {
  const authContext = useAuth();
  const { profileData } = authContext;
  const { transactions } = profileData;

  return <Transactions user={profileData} transactions={transactions} />;
}

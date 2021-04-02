import React, { useEffect, useState } from "react";
import CompanyItem from "../../components/list/CompanyItem";

export default function CompanyItemCtrl({ coinData }) {
  return <CompanyItem coinData={coinData} />;
}

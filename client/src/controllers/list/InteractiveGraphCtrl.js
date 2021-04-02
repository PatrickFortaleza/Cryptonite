import React, { useState, useEffect } from "react";
import InteractiveGraph from "../../components/list/InteractiveGraph";

export default function InteractiveGraphCtrl({ sparkline }) {
  const [days, setDays] = useState(7);
  const [computedSparkline, setComputedSparkline] = useState([]);

  const calculateSparkline = () => {
    if (
      (!sparkline.price && sparkline.price.length < 1) ||
      typeof days !== "number"
    )
      return setComputedSparkline([]);

    const sliceDays = 24 * days;
    const slicedSparkline = sparkline.price.slice(168 - sliceDays, 168);
    setComputedSparkline(slicedSparkline);
  };

  useEffect(() => {
    calculateSparkline();
  }, [days]);

  return (
    <InteractiveGraph
      days={days}
      setDays={setDays}
      computedSparkline={computedSparkline}
    />
  );
}

import React, { useState, useEffect } from "react";
import Sparkline from "../../components/list/Sparkline";

let mounted = false;
export default function SparklineCtrl({ sparkLine, hasFill, height, width }) {
  const [yCoords, setYCoords] = useState([]);
  const [xCoords, setXCoords] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [svgPathStroke, setSvgPathStroke] = useState("");
  const [svgPathFill, setSvgPathFill] = useState("");

  const processY = (array) => {
    if (!array || array.length < 1) return [];

    let intArray = array.map((int) => +int);
    let oMax = Math.min.apply(Math, intArray),
      oMin = Math.max.apply(Math, intArray),
      nMax = height,
      nMin = 0,
      oRange = oMax - oMin,
      nRange = nMax - nMin;

    const yCoordinates = intArray.map((int) => {
      let nValue = ((+int - oMin) * nRange) / oRange + nMin;
      return nValue;
    });
    return yCoordinates;
  };

  const processX = (array) => {
    if (!mounted) return null;
    if (!array || array.length < 1) return [];
    let intArray = array.map((int) => +int),
      increment = width / intArray.length,
      counter = 0,
      xCoordinates = [];

    intArray.forEach(() => {
      xCoordinates = [...xCoordinates, counter];
      counter += increment;
    });
    return xCoordinates;
  };

  const mergeCoordinates = (xArray, yArray) => {
    if (
      !xArray ||
      !yArray ||
      xArray.length < 1 ||
      yArray.length < 1 ||
      xArray.length !== yArray.length
    )
      return [];

    let mergedArray = [];
    for (let i = 0; i < xArray.length; i++) {
      mergedArray = [...mergedArray, `${xArray[i]} , ${yArray[i]}`];
    }
    return mergedArray;
  };

  const formatCoordinates = (array) => {
    if (!array || array.length < 1) return null;

    let formattedArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        formattedArray[i] = `M ${array[i]} `;
      } else {
        formattedArray[i] = `L ${array[i]} `;
      }
    }

    const svgString = formattedArray.join("");
    return svgString;
  };

  const formatFillCoordinates = (string) => {
    if (!string || string.length < 1) return null;
    setSvgPathFill(`${string} V 100 L 0 100 Z`);
  };

  useEffect(() => {
    mounted = true;

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (mounted) {
      setYCoords(processY(sparkLine));
      setXCoords(processX(sparkLine));
    }
  }, [sparkLine]);

  useEffect(() => {
    if (mounted) {
      setCoordinates(mergeCoordinates(xCoords, yCoords));
    }
  }, [xCoords, xCoords]);

  useEffect(() => {
    if (mounted) {
      setSvgPathStroke(formatCoordinates(coordinates));
    }
  }, [coordinates]);

  useEffect(() => {
    if (mounted) {
      formatFillCoordinates(svgPathStroke);
    }
  }, [svgPathStroke]);

  return (
    <Sparkline
      StringPathStroke={svgPathStroke}
      StringPathFill={svgPathFill}
      hasFill={hasFill}
    />
  );
}

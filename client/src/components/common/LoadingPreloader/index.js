import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";

let mounted = false;
export default function index() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    addDots();
  }, [dots]);

  useEffect(() => {
    mounted = true;

    return () => {
      mounted = false;
    };
  }, []);

  const addDots = () => {
    if (!mounted) return null;
    setTimeout(() => {
      if (!mounted) return null;
      if (dots.length > 2) return setDots((currentDots) => (currentDots = []));
      setDots((currentDots) => (currentDots = [...currentDots, "."]));
    }, 250);
  };

  return <Text style={styles.preloader}>Loading{dots.join("")}</Text>;
}

const styles = StyleSheet.create({
  preloader: {
    marginVertical: 20,
    color: "white",
    textAlign: "left",
  },
});

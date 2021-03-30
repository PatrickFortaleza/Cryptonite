import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const PREFIX = "Cryptonite";

export default function useAsyncStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(async () => {
    const jsonValue = await AsyncStorage.getItem(prefixedKey);
    if (jsonValue !== null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  const setItem = async () => {
    await AsyncStorage.setItem(prefixedKey, JSON.stringify(value));
  };

  useEffect(() => {
    setItem();
  }, [prefixedKey, value]);

  return [value, setValue];
}

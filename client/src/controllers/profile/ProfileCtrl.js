import React, {useState, useEffect} from "react";
import Profile from "../../components/profile/Profile";
import { useAuth } from "../../context/AuthContext";
import { getMarkets } from "../../network";

export default function ProfileCtrl() {
  const authContext = useAuth();
  const [markets, setMarkets] = useState([]);
  const maxMarkets = 5;
  const queryMarkets = async () => {
    const result = await getMarkets();
    if (!result || result.error){
      setMarkets([]);
      return;
    }
    setMarkets(result.slice(0, maxMarkets));
  }

  useEffect(() => {
    queryMarkets();
  }, [])

  const { profileData } = authContext;

  return <Profile user={profileData} markets={markets}/>;
}

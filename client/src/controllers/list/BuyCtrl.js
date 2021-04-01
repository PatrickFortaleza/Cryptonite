import React ,{useState, useEffect} from "react";
import {Text} from "react-native";
import Buy from "../../components/list/Buy"

export default function BuyCtrl({prop}){

  return(
    <Buy prop = {prop}></Buy>
  )
}
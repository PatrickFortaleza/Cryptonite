import React, { useState, useEffect } from "react";
import SearchInput from "../../components/search/SearchInput";

export default function SearchInputCtrl({ searchQuery, setSearchQuery }) {
  return (
    <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
  );
}

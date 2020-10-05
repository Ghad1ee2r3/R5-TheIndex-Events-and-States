import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchBarStyled } from "./styles";
import authors from "./data";
import AuthorCard from "./AuthorCard";


const SearchBar = (props) => {
  const [query,setQuery] = useState("")
  const [_authors, setAuthors] = useState(authors);
  //const [query,setQuery] = useState("")

  const handleChange = event => {
    setQuery(event.target.value)
  }
  return <div>
       
      <SearchBarStyled placeholder="Search for author name" onChange={(event) => props.setQuery(event.target.value)}/>
  </div> 
  

}

export default SearchBar;
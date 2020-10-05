import React ,  { useState } from "react";
//first_name + author.last_name
import SearchBar from "./SearchBar";
// Components
import AuthorCard from "./AuthorCard";
import authors from "./data";


const AuthorList = props => {

  const [query,setQuery] = useState("")
  const [_authors, setAuthors] = useState(authors);
  const filteredAuthors = _authors.filter((author) => author.first_name.toLowerCase().includes(query.toLowerCase())).map((author) => <AuthorCard author={author} key={author.id} setAuthor={props.setAuthor} />);

  
  return (
    <div className="authors">
      <h3>Authors</h3>
      <SearchBar setQuery={setQuery} />
      <div className="row">{filteredAuthors}</div>
      
    </div>
  );
};

export default AuthorList;

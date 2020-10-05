import React ,{ useState }from "react";

import AuthorDetail from "./AuthorDetail";
// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorCard from "./AuthorCard"
import AuthorList from "./AuthorList";

function App() {
  const [author, setAuthor] = useState(null);//authors[0])
  const [currentAuthor, setCurrentAuthor] = useState(null);
 

const listauthor = () => setCurrentAuthor(null);
  


    //const author = authors[0]
    const setView = () => {
      if (author) return <AuthorDetail author={author} />;
      return <AuthorList authors={authors} setAuthor={setAuthor} />;
    };
   
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar  authors={authors} setAuthor={setAuthor}/>
        </div>
        <div className="content col-10">
        {setView()}
        
        </div>
      </div>
    </div>
  );
}

export default App;

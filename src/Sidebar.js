import React ,  { useState } from "react";

const Sidebar = (props) => {
  
    //const author = props.author;
  const [author, setAuthor] = useState(null);
 
  return (
    <div id="sidebar">
      <img src="theindex.svg" className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <button onClick={() => props.setAuthor(author)}>AUTHORS</button>
        </h4>
      </section>
    </div>
  );
};

export default Sidebar;

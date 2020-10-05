import React from "react";

import { DetailWrapper } from "./styles";


const AuthorDetail = (props) => {
    const author = props.author;
    const authorbooks=author.books.map(book =>(
        <tr>
                
                <td>{book.title}</td>
                <td>{author.first_name}</td>
                <td>
                    <button className="btn" style={{backgroundColor: book.color}}/>
                </td>
            </tr>
    ));
    return (
        <DetailWrapper>
      <div className="author col-xs-10">
    <div>
        <h3>{author.first_name}</h3>
        <img src="http://catchingfire.ca/wp-content/uploads/2016/09/question-mark-square-01.png" className="img-thumbnail" alt=""/>
    </div>
    <table className='mt-3 table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Authors</th>
                <th>Color</th>
            </tr>
        </thead>
        <tbody>
        
      
    
           {authorbooks}

        </tbody>
    </table>
</div>
      </DetailWrapper>
    );
  };

export default AuthorDetail;
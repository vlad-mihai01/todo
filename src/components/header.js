import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  const signOutLink = () =>{
    var login = sessionStorage.getItem('login');
    if(login){
      return <Link to="/todo/login" onClick={props.signOut} className="nav-link active" href="#">Sign out</Link>
    }
  }

  return(
    <div className="col-12 mb-2">
      <div className="row"><h1>Another To Do App</h1></div>
      <div className="row border-bottom-5">
        <nav className="nav">
          <Link to="/todo/" className="nav-link active" href="#">To do ...</Link>
          {signOutLink()}
        </nav>
      </div>
  </div>
  );
}

export default Header;

import React from 'react'

function Header() {
    return (
           
           <nav className="navbar navbar-default" role="navigation">
           
               <div className="navbar-header">
                   <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                       <span className="sr-only">Toggle navigation</span>
                       <span className="icon-bar"></span>
                       <span className="icon-bar"></span>
                       <span className="icon-bar"></span>
                   </button>
                   <a className="navbar-brand" >Title</a>
               </div>
           
            
               <div className="collapse navbar-collapse navbar-ex1-collapse">
                   <ul className="nav navbar-nav">
                       <li className="active"><a >Link</a></li>
                       <li><a >Link</a></li>
                   </ul>
                   <form className="navbar-form navbar-left" role="search">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Search"/>
                       </div>
                       <button type="submit" className="btn btn-default">Submit</button>
                   </form>
                   <ul className="nav navbar-nav navbar-right">
                       <li><a >Link</a></li>
                       <li className="dropdown">
                           <a  className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                           <ul className="dropdown-menu">
                               <li><a >Action</a></li>
                               <li><a >Another action</a></li>
                               <li><a >Something else here</a></li>
                               <li><a >Separated link</a></li>
                           </ul>
                       </li>
                   </ul>
               </div>
           </nav>
           
           



      
         
           
           
           
           
           
            
        
    );
}

export default Header;

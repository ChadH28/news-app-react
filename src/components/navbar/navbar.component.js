import React from 'react';
import './navbar.styles.css';
import { Link } from "react-router-dom";
import { Searchbar } from '../searchbar/searchbar.component';



const Navbar = ({handleChange,searchField}) => {
  console.log('State in navbar', searchField )
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/top-headline">Top Headlines</Link>
            </li>
          </ul>
          <Searchbar
            handleChange={handleChange}
          />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;


// class Navbar extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       searchField: ''
//     }
//   }

//   handleChange = (e) => {
//     this.setState({ searchField: e.target.value }, () => console.log(this.state))
//   }

//   render() {    
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <Link to="/" className="navbar-brand">Home</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               {/* <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//               </li> */}
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" aria-current="page" to="/top-headline">Top Headlines</Link>
//               </li>
//             </ul>
//             <Searchbar
//               handleChange={handleChange}
//               placeholder='Search News here..' />
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }
// export default Navbar;
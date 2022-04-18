import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
        < Link to="/" >Home</Link>
        < Link to="/add-item" >Add Item</Link>
        < Link to="/view-item" >View Item</Link>
        < Link to="/view-cart" >View Cart</Link>
    </Container>
  </Navbar>

    // <div className="navbar">
    //   <ul>
    //   <li className="nav-li">
    //       <h1>
    //         <Link to="/">Home</Link>
    //       </h1>
    //     </li>
    //     <li className="nav-li">
    //       <h1>
    //         <Link to="/add-item">Add Item</Link>
    //       </h1>
    //     </li>
    //     <li className="nav-li">
    //       <h1>
    //         <Link to="/view-item">View Item</Link>
    //       </h1>
    //     </li>
    //     <li className="nav-li">
    //       <h1>
    //         <Link to="/view-cart">View Cart</Link>
    //       </h1>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Header;

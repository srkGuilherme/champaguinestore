import React from "react";

function Header() {
  return (
    <div className="Header">
      <ul>
        <li>
          <img className="Icon-in-Header" src="/assets/menu.png"></img>
        </li>
        <li>CHAMPAGUINE STORE</li>
        <li>
          <img className="Icon-in-Header" src="/assets/cart.png"></img>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Header;

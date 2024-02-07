import React, { useState } from "react";

function Header() {
  const [searchStyle, setSearchStyle] = useState("CloseSearch");

  const handleSearchAnimation = () => {
    console.log("Search clicked");
    if (searchStyle !== "CloseSearch") {
      setSearchStyle("CloseSearch");
      console.log(searchStyle);
    } else {
      setSearchStyle("OpenSearch");
      console.log(searchStyle);
    }
  };

  return (
    <div className="Header">
      <ul>
        <li>
          <img className="Icon-in-Header" src="/assets/menu.png"></img>
        </li>
        <li>CHAMPAGUINE STORE</li>
        <li className="SearchLi">
          <span className={searchStyle}>
            <img
              className="Icon-in-Header"
              src="/assets/search.png"
              onClick={handleSearchAnimation}
            ></img>
            <input placeholder="Procurar produto"></input>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Header;

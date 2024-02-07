import React, { useState } from "react";

function Header() {
  const [searchStyle, setSearchStyle] = useState("CloseSearch");
  const [menuStyle, setMenuStyle] = useState("CloseMenu");

  const handleSearchAnimation = () => {
    console.log("Search clicked");
    if (searchStyle !== "CloseSearch") {
      setSearchStyle("CloseSearch");
    } else {
      setMenuStyle("CloseMenu");
      setSearchStyle("OpenSearch");
    }
  };

  const handleMenuAnimation = () => {
    console.log("Menu clicked");
    if (menuStyle !== "CloseMenu") {
      setMenuStyle("CloseMenu");
      console.log("Menu is now Closed");
    } else {
      setSearchStyle("CloseSearch");
      setMenuStyle("OpenMenu");
      console.log("Menu is now Open");
    }
  };

  return (
    <div className="Header">
      <ul>
        <li>
          <img
            className="Icon-in-Header"
            src="/assets/menu.png"
            onClick={handleMenuAnimation}
          ></img>
          <span className={menuStyle}>
            <select>
              <option value="Cor">Cor</option>
              <option value="Vermelho">Vermelho</option>
              <option value="Cinza">Cinza</option>
              <option value="Azul">Azul</option>
              <option value="Verde">Verde</option>
              <option value="Preto">Preto</option>
              <option value="Branco">Branco</option>
            </select>
            <select>
              <option value="Tamanho">Tamanho</option>
              <option value="Tamanho">37</option>
              <option value="Tamanho">38</option>
              <option value="Tamanho">39</option>
              <option value="Tamanho">40</option>
              <option value="Tamanho">41</option>
              <option value="Tamanho">42</option>
            </select>
            <select>
              <option value="Marca">Marca</option>
              <option value="Marca">Nike</option>
              <option value="Marca">Adidas</option>
              <option value="Marca">New balance</option>
              <option value="Marca">Fila</option>
            </select>
            <select>
              <option value="Preço">Preço</option>
            </select>
          </span>
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

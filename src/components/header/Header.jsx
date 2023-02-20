import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <h1 className="header__logo">
            <a href="/">
              <img src="/Logo.svg" alt="Logo" width="102px" height="24px" />
              <span className="visually-hidden">eCommerce</span>
            </a>
          </h1>
          <nav>
            <ul className="header__nav">
              <li>
                <a href="#Home">HOME</a>
              </li>
              <li>
                <a href="#about-us">ABOUT US</a>
              </li>
              <li>
                <a href="#shop">SHOP</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </nav>
          <div className="header__img">
            <img src="/shop.png" alt="shop" />
            <img src="/lupa.png" alt="lupa" />
          </div>
        </div>
      </div>
    </header>
  );
}

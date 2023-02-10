import React from 'react'
import "./Footer.scss"
import "/public/critical.scss";

export default function Footer() {
  return (
<footer>
    <div class="container">
      <div class="footer">
        <div class="footer__logo">
          <a href="/">
            <img src="/Logo.svg" alt="Logo" />
          </a>
          <nav>
            <ul class="footer__nav">
              <h3>Customer Support</h3>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Free Return</a></li>
              <li><a href="#">Track your Order</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
            <ul class="footer__nav">
              <h3>About Us</h3>
              <li><a href="#">Our Values</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Brand Ambassadors</a></li>
              <li><a href="#">Fitness Professionals</a></li>
            </ul>
            <ul class="footer__nav">
              <h3>Customer Service</h3>
              <li><a href="#">Help</a></li>
              <li><a href="#">Leader Support</a></li>
              <li><a href="#">Pleasant Grove Product Center</a></li>
              <li><a href="#">Recall—Important Safety Information</a></li>
            </ul>
          </nav>
        </div>
        <p>copyright © 2022 Toutem all rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

import React from 'react'
import "./TextImg.scss"
import "/public/critical.scss";

export default function TextImg() {
  return (
   <section className="section">
      <div className="container">
        <div className="img-text">
          <div className="img-text__content">
            <h2>
              Our luxury soaps are 100% natural providing nourishing benefits
              for your skin.
            </h2>
            <a className="btn-secondary" href="#">SHOP ALL</a>
          </div>
          <div className="img-text__img">
            <img src="/img-text-img.png" alt="img-text-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

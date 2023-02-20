import React from "react";
import "./ImgWithText.scss";

export default function ImgWithText() {
  return (
    <section className="section">
      <div className="container">
        <div className="img-with-text">
          <div className="img-with-text__inner">
            <div className="img-with-text__img">
              <img src="/img-with-text-img.png" alt="img-with-text" />
            </div>
            <div className="img-with-text__content">
              <h2>Improve your well-being with Aromatherapy</h2>
              <p>
                Diffusing can be exactly what you need to add purpose and focus
                to your daily tasks. We've got tons of fun diffuser blends, with
                scents to suit every mood, day and situation.
              </p>
              <a className="btn" href="#">
                EXPlORE THE COLLECTION
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

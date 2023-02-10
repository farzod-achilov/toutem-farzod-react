import React from 'react'
import "./FeaturedProduct.scss"
import "/public/critical.scss";

export default function FeaturedProduct() {
  return (
    <section className="section">
      <div className="container">
        <div className="featured-product">
          <div className="featured-product__content">
            <h2>Bestsellers</h2>
            <a href="#" className="btn">SHOP ALL</a>
          </div>
          <div className="featered-product__img">
            <div className="featered-product__img-card">
              <img src="/src/assets/aroma-diffuser.png" alt="aroma-diffuser" />
              <div
                className="featered-product__img-content featered-product__img-content--bg-aroma"
              >
                <div className="featered-product__img-content-header">
                  <h4>Aroma Diffuser</h4>
                  <span>$20</span>
                </div>
                <div className="featered-product__img-content-subtitle">
                  <p>
                    Original product comes in three styles of color, usb charger
                  </p>
                  <a href="#"
                    ><svg
                      width="45"
                      height="50"
                      viewBox="0 0 45 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.81318 47.4389C10.8971 47.4389 11.7758 46.5602 11.7758 45.4763C11.7758 44.3924 10.8971 43.5137 9.81318 43.5137C8.72927 43.5137 7.85059 44.3924 7.85059 45.4763C7.85059 46.5602 8.72927 47.4389 9.81318 47.4389Z"
                        fill="#1F2937"
                      />
                      <path
                        d="M23.551 47.4389C24.6349 47.4389 25.5136 46.5602 25.5136 45.4763C25.5136 44.3924 24.6349 43.5137 23.551 43.5137C22.4671 43.5137 21.5884 44.3924 21.5884 45.4763C21.5884 46.5602 22.4671 47.4389 23.551 47.4389Z"
                        fill="#1F2937"
                      />
                      <path
                        d="M27.4763 24.8691H5.71114L4.90648 20.7476C4.8606 20.5227 4.73728 20.3209 4.55798 20.1774C4.37868 20.034 4.15475 19.958 3.92518 19.9626H0V21.9252H3.12052L6.86907 40.7661C6.91495 40.9911 7.03827 41.1928 7.21757 41.3363C7.39687 41.4797 7.6208 41.5557 7.85037 41.5511H25.5137V39.5885H8.65503L7.85037 35.6633H25.5137C25.7405 35.6689 25.9623 35.5956 26.1412 35.4561C26.3201 35.3165 26.4451 35.1193 26.495 34.8979L28.4576 26.0663C28.4905 25.9207 28.4897 25.7695 28.4553 25.6242C28.421 25.479 28.354 25.3435 28.2593 25.228C28.1647 25.1126 28.045 25.0202 27.9093 24.958C27.7736 24.8958 27.6255 24.8654 27.4763 24.8691ZM24.7287 33.7007H7.47748L6.10366 26.8317H26.2497L24.7287 33.7007Z"
                        fill="#1F2937"
                      />
                      <path
                        d="M35.0674 28.2529C35.7852 28.2529 36.2539 27.7109 36.2539 26.9932V21.8516H41.1025C41.8203 21.8516 42.3623 21.3828 42.3623 20.665C42.3623 19.9473 41.8203 19.4785 41.1025 19.4785H36.2539V14.3223C36.2539 13.6045 35.7852 13.0625 35.0674 13.0625C34.3496 13.0625 33.8809 13.6045 33.8809 14.3223V19.4785H29.0176C28.2998 19.4785 27.7578 19.9473 27.7578 20.665C27.7578 21.3828 28.2998 21.8516 29.0176 21.8516H33.8809V26.9932C33.8809 27.7109 34.3496 28.2529 35.0674 28.2529Z"
                        fill="#1F2937"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="featered-product__img-card">
              <img
                src="/src/assets/lux-aroma-diffuser.png"
                alt="lux-aroma-diffuser"
              />
              <div
                className="featered-product__img-content featered-product__img-content--bg-lux"
              >
                <div className="featered-product__img-content-header">
                  <h4>Lux Aroma Diffuser</h4>
                  <span>$15</span>
                </div>
                <div className="featered-product__img-content-subtitle">
                  <p>
                    Beautiful decorative object, perfumes the space with your
                    favorite fragrance.
                  </p>
                  <a href="#"
                    ><svg
                      width="45"
                      height="50"
                      viewBox="0 0 45 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.81318 47.4389C10.8971 47.4389 11.7758 46.5602 11.7758 45.4763C11.7758 44.3924 10.8971 43.5137 9.81318 43.5137C8.72927 43.5137 7.85059 44.3924 7.85059 45.4763C7.85059 46.5602 8.72927 47.4389 9.81318 47.4389Z"
                        fill="#1F2937"
                      />
                      <path
                        d="M23.551 47.4389C24.6349 47.4389 25.5136 46.5602 25.5136 45.4763C25.5136 44.3924 24.6349 43.5137 23.551 43.5137C22.4671 43.5137 21.5884 44.3924 21.5884 45.4763C21.5884 46.5602 22.4671 47.4389 23.551 47.4389Z"
                        fill="#1F2937"
                      />
                      <path
                        d="M27.4763 24.8691H5.71114L4.90648 20.7476C4.8606 20.5227 4.73728 20.3209 4.55798 20.1774C4.37868 20.034 4.15475 19.958 3.92518 19.9626H0V21.9252H3.12052L6.86907 40.7661C6.91495 40.9911 7.03827 41.1928 7.21757 41.3363C7.39687 41.4797 7.6208 41.5557 7.85037 41.5511H25.5137V39.5885H8.65503L7.85037 35.6633H25.5137C25.7405 35.6689 25.9623 35.5956 26.1412 35.4561C26.3201 35.3165 26.4451 35.1193 26.495 34.8979L28.4576 26.0663C28.4905 25.9207 28.4897 25.7695 28.4553 25.6242C28.421 25.479 28.354 25.3435 28.2593 25.228C28.1647 25.1126 28.045 25.0202 27.9093 24.958C27.7736 24.8958 27.6255 24.8654 27.4763 24.8691ZM24.7287 33.7007H7.47748L6.10366 26.8317H26.2497L24.7287 33.7007Z"
                        fill="#1F2937"
                      />
                      <path
                        d="M35.0674 28.2529C35.7852 28.2529 36.2539 27.7109 36.2539 26.9932V21.8516H41.1025C41.8203 21.8516 42.3623 21.3828 42.3623 20.665C42.3623 19.9473 41.8203 19.4785 41.1025 19.4785H36.2539V14.3223C36.2539 13.6045 35.7852 13.0625 35.0674 13.0625C34.3496 13.0625 33.8809 13.6045 33.8809 14.3223V19.4785H29.0176C28.2998 19.4785 27.7578 19.9473 27.7578 20.665C27.7578 21.3828 28.2998 21.8516 29.0176 21.8516H33.8809V26.9932C33.8809 27.7109 34.3496 28.2529 35.0674 28.2529Z"
                        fill="#1F2937"
                      />
                    </svg>
                  </a>
                </div>
                <div className="featured-product__button">
                  <button className="button" type="button"></button>
                  <button type="button"></button>
                  <button type="button"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

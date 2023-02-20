import React from "react";
import "./Blog.scss";

export default function Blog() {
  return (
    <section class="section">
      <div class="container">
        <div class="blog">
          <h2>BLOG</h2>
          <ul class="blog__inner">
            <li class="blog__card">
              <div class="blog__card-img">
                <img src="/card-img.png" alt="card-img" />
              </div>
              <div class="blog__card-content">
                <h3>How to create your own essential oil diffuser blends</h3>
                <p>
                  As you begin creating your own diffuser blends, it’s important
                  to keep a few ...
                </p>
              </div>
            </li>
            <li class="blog__card">
              <div class="blog__card-img">
                <img src="/card-img.png" alt="card-img" />
              </div>
              <div class="blog__card-content">
                <h3>How to create your own essential oil diffuser blends</h3>
                <p>
                  As you begin creating your own diffuser blends, it’s important
                  to keep a few ...
                </p>
              </div>
            </li>
            <li class="blog__card">
              <div class="blog__card-img">
                <img src="/card-img.png" alt="card-img" />
              </div>
              <div class="blog__card-content">
                <h3>How to create your own essential oil diffuser blends</h3>
                <p>
                  As you begin creating your own diffuser blends, it’s important
                  to keep a few ...
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

import React from 'react'
import "./Hero.scss"
import "/public/critical.scss";

export default function Hero() {
  return (
   <section className="section">
   <div className="container">
     <div className="hero">
       <div className="hero__inner">
         <div className="hero__content">
           <h2 className="hero__caption">Pear kiwi & Mint</h2>
           <p hero__subtitle>
             They say that home is where the heart is. Perhaps that’s why a
             feeling of loss is so apparent when you are far from the ones
             you love.
           </p>
         </div>
         <div className="hero__img">
           <img
             src="/src/assets/hero-img.png"
             width="720px"
             height="520px"
             alt="hero-img"
           />
         </div>
       </div>
     </div>
   </div>
 </section>
  )
}

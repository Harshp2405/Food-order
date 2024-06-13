import React from 'react'
import './Css/Footer.css'
import { assetsf } from '../Assets/frontend_assets/assets'
export const Footer = () => {
  return (
    <>
    <br /><br />
      Footer
      <div id="footer">
        <footer className="footer">
          <section className="box-container">
            <div className="box">
              <img src="" alt="" />
            </div>
            <div className="box">
              <h3>quick link</h3>
              <a href="/"> <i className="fas fa-angle-right"></i> Home</a>
              <a href="/"> <i className="fas fa-angle-right"></i> Shop</a>
              <a href="/"> <i className="fas fa-angle-right"></i> About</a>
              <a href="/"> <i className="fas fa-angle-right"></i> Contact</a>
            </div>

            {/* <div className="box">
              <h3>extra links</h3>
              <a href="cart"> <i className="fas fa-angle-right"></i> Cart</a>
              <a href="wishlist"> <i className="fas fa-angle-right"></i>Join As Distributor</a>
              <a href="login"> <i className="fas fa-angle-right"></i> Login</a>
              <a href="register"> <i className="fas fa-angle-right"></i> Register</a>
            </div> */}

            <div className="box">
              <h3>contact info</h3>
              <p> <i className="fas fa-phone"></i> +91 00260 90103</p>
              <p> <i className="fas fa-phone"></i> +91 63500 75834 </p>
              <p> <i className="fas fa-envelope" ></i><a href="mailto:everfreshgrocery@gmail.com">everfreshgrocery@gmail.com</a> </p>
              <p> <i className="fas fa-map-marker-alt"></i> Rajkot,Gujarat ,INDIA - 360001 </p>
            </div>

            <div className="box">
              <h3>follow us</h3>
              <a href="https://www.facebook.com/profile?id=100092280276085"> <i className="fab fa-facebook-f"></i> Facebook </a>
              <a href="https://twitter.com/EverFresh01"> <i className="fab fa-twitter"></i> Twitter </a>
              <a href="https://www.instagram.com/everfreshgrocery/"> <i className="fab fa-instagram"></i> Instagram </a>
            </div>
          </section>
        </footer>
      </div>
    </>
  )
}

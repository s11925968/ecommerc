import React from 'react'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
  return (
    <section id="about">
    <header className="header">
      <div className="info-header">
        <div className="info-home text-center">
          <div className="d-flex d-flex justify-content-center align-items-center">
            <p>Welcome to Ecommerce</p>
          </div>
          <span>
          Explore a world of possibilities<br/> with All Palestinian<br/> Trips' exclusive offers,
          
          </span>
          <div className="icons">
            <FontAwesomeIcon icon={faFacebook} className="brand brand-face" />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="brand brand-linked"
            />
            <FontAwesomeIcon icon={faGoogle} className="brand brand-google" />
          </div>
        </div>
      </div>
    </header>
    <section className="category-serives container pt-5">
      <div className="info-category">
        <h2>CATEGORY</h2>
        <p>We Offer Best Services</p>
      </div>
      <div className="services my-5">
        <div className="row">
          <div className="col-md-3 services-image">
            <img src="/gategories/shopping-bag.png" />

            <h4 className="py-3">Guided Tours</h4>
            <p>
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
          </div>
          <div className="col-md-3 services-image">
            <img src="/gategories/ecommerce (1).png" />
            <h4 className="py-3">Best Flights Options</h4>
            <p>
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
          </div>
          <div className="col-md-3 services-image">
            <img src="/gategories/online-store.png" />
            <h4 className="py-3">Religious Tours</h4>
            <p>
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
          </div>
          <div className="col-md-3 services-image">
            <img src="/gategories/ecommerce.png" />

            <h4 className="py-3">Medical insurance</h4>
            <p>
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="about-us container">
      <div className="row info-images">
        <h2>About us</h2>

        <div className="col-md-6 about-info">
          <p>
          E-commerce Pulse serves as a bridge between online retailers and consumers, enabling retailers to showcase their products and promotions while offering consumers a diverse array of products. It facilitates advertising for online retailers and ensures a wide variety of products for shoppers.
          </p>
        </div>
        <div className="col-md-6 image-about">
          {/* <img src="/images/info-images.jpg" alt="image-abour-us" /> */}
          <img src="/image/about1.jpg" className='' />
        </div>
      </div>
    </section>
    <section className="map position-relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27002.02680188146!2d35.22707967947037!3d32.22434418493328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce0f650425697%3A0x7f0ba930bd153d84!2sNablus!5e0!3m2!1sen!2s!4v1701524940071!5m2!1sen!2s"
        width="100%"
        height={650}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="info-map position-absolute bottom-0 w-100">
        <div className="container text-white rounded-top-3 p-3 py-4">
          <div className="row d-flex">
            <div className="col-lg-4 d-flex  justify-content-center">
              <div className="info d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="solid fs-4 d-flex justify-content-center align-items-center main-color pe-2"
                />
                <span>
                  Contact Number <br />
                  +99999999999
                </span>
              </div>
            </div>
            <div className="col-lg-4 d-flex  justify-content-center">
              <div className="info d-flex align-items-center text-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="solid fs-4 d-flex justify-content-center align-items-center main-color pe-2"
                />
                <spam>
                  Email Address
                  <br />
                  Example@gmail.com
                </spam>
              </div>
            </div>
            <div className="col-lg-4 d-flex  justify-content-center">
              <div className="info d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="solid fs-4 d-flex justify-content-center align-items-center main-color pe-2"
                />
                <span className="">
                  Location
                  <br />
                  nablues
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
  )
}

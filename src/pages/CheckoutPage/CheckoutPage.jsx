import "../CheckoutPage/CheckoutPage.scss";
import close from "../../assets/icons/close.png";
import rosejam from "../../assets/images/rose_jam_shower_gel_2020_thumbnail_256.png";
import logo from "../../assets/logos/commerce-site-logo_22.png";
import padlock from "../../assets/icons/padlock.png";

import { NavLink, Link } from "react-router-dom";

function CheckoutPage() {
  console.log("I am in checkout page");
  return (
    <>
      <header className="checkout-header">
        <Link to="/">
          <img className="checkout-header__logo" src={logo} alt="lush-logo" />
        </Link>
        <div className="checkout-header__container">
          <div className="checkout-header__title-wrapper">
            <span className="checkout-header__title">Checkout</span>
            <img
              src={padlock}
              alt="padlock-icon"
              className="checkout-header__icon"
            />
          </div>
          <p className="checkout-header__price">$76.16</p>
        </div>
      </header>
      <div className="checkout-page">
        <h2 className="checkout-page__header">Summary & review</h2>
        <div className="checkout-page__details">
          <ul className="checkout-page__list">
            <li className="checkout-page__items">
              <div className="outer-container">
              <div className="checkout-page__col-1">
                <img
                  src={rosejam}
                  alt="rose-jam-shower-gel"
                  className="checkout-page__image"
                />
                <div>
                  <p className="checkout-page__prod-title">Rose Jam</p>
                  <p className="checkout-page__prod-type">SHOWER GEL</p>
                  <div className="checkout-page__row-1">
                    <p className="checkout-page__vol">250 ml</p>
                    <p className="checkout-page__qty"> QTY: 1</p>
                  </div>
                </div>

                {/* <select className="checkout-page__select"></select>
                <button className="checkout-page__button-minus">-</button>
                <input></input>
                <button className="checkout-page__button-plus">+</button> */}
              </div>
              <p className="checkout-page__price">$26.00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;

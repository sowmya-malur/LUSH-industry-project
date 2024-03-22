import "../CheckoutPage/CheckoutPage.scss";
import close from "../../assets/icons/close.png";
import rosejam from "../../assets/images/rose_jam_shower_gel_2020_thumbnail_256.png";
function CheckoutPage() {
  console.log("I am in checkout page");
  return (
    <>
      <div className="checkout-page">
        <div className="checkout-page__container">
          <h2 className="checkout-page__header">Bag (2)</h2>
          <img src={close} alt="close-icon" className="checkout-page__icon" />
        </div>
        <div className="checkout-page__details">
            <ul className="checkout-page__list">
                <li className="checkout-page__items">
                    <div>
                        <img />
                        <p>Rose Jam</p>
                        <p>Shower Gel</p>
                        <img/>
                    </div>
                    <div>
                        <select className="checkout-page__select"></select>
                        <button className="checkout-page__button-minus">-</button>
                        <input></input>
                        <button className="checkout-page__button-plus">+</button>
                    </div>
                    </li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;

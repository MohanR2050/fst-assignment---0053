import "./CreditCard.css";

function CreditCard({
  name,
  number,
  expMonth,
  expYear,
  cvc,
}) {
  return (
    <div className="cards-container">

      {/* FRONT CARD */}
      <div className="credit-card front-card">

        <div className="card-top">

          <div className="card-chip">
            <div className="chip-line line-one"></div>
            <div className="chip-line line-two"></div>
            <div className="chip-line line-three"></div>
          </div>

          <div className="contactless">
            )))
          </div>

        </div>

        <div className="card-number">
          {number || "0000 0000 0000 0000"}
        </div>

        <div className="front-card-bottom">

          <div className="card-holder">
            <span>CARDHOLDER</span>

            <strong>
              {name || "JANE APPLESEED"}
            </strong>
          </div>

          <div className="card-expiry">
            <span>VALID THRU</span>

            <strong>
              {expMonth || "00"}/{expYear || "00"}
            </strong>
          </div>

        </div>
      </div>

      {/* BACK CARD */}
      <div className="credit-card back-card">

        <div className="magnetic-strip"></div>

        <div className="cvc-label">
          CVC
        </div>

        <div className="cvc-box">
          {cvc || "000"}
        </div>

        <div className="signature-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </div>
  );
}

export default CreditCard;
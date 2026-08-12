import { useState } from "react";
import "./CardForm.css";

function CardForm({ onConfirm }) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));
  }

  function validateForm() {
    const newErrors = {};

    // Cardholder name
    if (!formData.name.trim()) {
      newErrors.name = "Cardholder name is required.";
    } else if (!/^[A-Za-z ]+$/.test(formData.name.trim())) {
      newErrors.name = "Name can contain letters and spaces only.";
    }

    // Card number
    const cardNumber = formData.number.replace(/\s/g, "");

    if (!cardNumber) {
      newErrors.number = "Card number is required.";
    } else if (!/^\d+$/.test(cardNumber)) {
      newErrors.number = "Card number must contain numbers only.";
    } else if (cardNumber.length !== 16) {
      newErrors.number = "Card number must contain exactly 16 digits.";
    }

    // Expiry month
    if (!formData.expMonth) {
      newErrors.expMonth = "Month is required.";
    } else if (!/^\d{2}$/.test(formData.expMonth)) {
      newErrors.expMonth = "Enter a 2-digit month.";
    } else {
      const month = Number(formData.expMonth);

      if (month < 1 || month > 12) {
        newErrors.expMonth = "Enter a valid month (01-12).";
      }
    }

    // Expiry year
    if (!formData.expYear) {
      newErrors.expYear = "Year is required.";
    } else if (!/^\d{2}$/.test(formData.expYear)) {
      newErrors.expYear = "Enter a 2-digit year.";
    }

    // CVC
    if (!formData.cvc) {
      newErrors.cvc = "CVC is required.";
    } else if (!/^\d{3}$/.test(formData.cvc)) {
      newErrors.cvc = "CVC must contain exactly 3 digits.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onConfirm(formData);
  }

  return (
    <form className="card-form" onSubmit={handleSubmit} noValidate>

      <div className="form-group">
        <label htmlFor="name">CARDHOLDER NAME</label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="e.g. Jane Appleseed"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "input-error" : ""}
        />

        {errors.name && (
          <p className="error-message">{errors.name}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="number">CARD NUMBER</label>

        <input
          id="number"
          name="number"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          value={formData.number}
          onChange={handleChange}
          maxLength="19"
          className={errors.number ? "input-error" : ""}
        />

        {errors.number && (
          <p className="error-message">{errors.number}</p>
        )}
      </div>

      <div className="form-row">

        <div className="form-group">
          <label htmlFor="expMonth">
            EXP. DATE (MM)
          </label>

          <input
            id="expMonth"
            name="expMonth"
            type="text"
            placeholder="MM"
            maxLength="2"
            value={formData.expMonth}
            onChange={handleChange}
            className={errors.expMonth ? "input-error" : ""}
          />

          {errors.expMonth && (
            <p className="error-message">
              {errors.expMonth}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="expYear">
            EXP. DATE (YY)
          </label>

          <input
            id="expYear"
            name="expYear"
            type="text"
            placeholder="YY"
            maxLength="2"
            value={formData.expYear}
            onChange={handleChange}
            className={errors.expYear ? "input-error" : ""}
          />

          {errors.expYear && (
            <p className="error-message">
              {errors.expYear}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="cvc">CVC</label>

          <input
            id="cvc"
            name="cvc"
            type="text"
            placeholder="e.g. 123"
            maxLength="3"
            value={formData.cvc}
            onChange={handleChange}
            className={errors.cvc ? "input-error" : ""}
          />

          {errors.cvc && (
            <p className="error-message">
              {errors.cvc}
            </p>
          )}
        </div>

      </div>

      <button type="submit">
        Confirm
      </button>

    </form>
  );
}

export default CardForm;
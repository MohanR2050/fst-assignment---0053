import { useState } from "react";
import CreditCard from "./CreditCard";
import CardForm from "./CardForm";
import "./App.css";

function App() {
  const [submitted, setSubmitted] = useState(null);
  const [showToast, setShowToast] = useState(false);

  function handleConfirm(values) {
    setSubmitted(values);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  }

  return (
    <div className="app">
      <div className="app-left">
        <CreditCard
          name={submitted?.name}
          number={submitted?.number}
          expMonth={submitted?.expMonth}
          expYear={submitted?.expYear}
          cvc={submitted?.cvc}
        />
      </div>

      <div className="app-right">
        <CardForm onConfirm={handleConfirm} />
      </div>

      {showToast && (
        <div className="toast">
          Card details confirmed
        </div>
      )}
    </div>
  );
}

export default App;
import React from "react";
import roundValue from "../helper-functions/roundValue";

export default function TotalDisplay({
  state: { bill, numOfPeople, tipSelection },
}) {
  function computeTotalPerPerson(bill, numOfPeople, tipSelection) {
    if (!bill || !numOfPeople) {
      return 0;
    }

    let totalTip = bill * (tipSelection / 100);
    let totalPay = parseInt(bill) + parseInt(totalTip);
    let totalPerPerson = totalPay / numOfPeople;
    return roundValue(totalPerPerson);
  }

  return (
    <div className="card__display__container__item">
      <div className="card__display__container__item__text">
        <p>Total</p>
        <span>/ person</span>
      </div>
      <div className="card__display__container__item__number">
        {/* <p>{"$" + computeTotalPerPerson(bill, numOfPeople, tipSelection)}</p> */}
        <p>$0.00</p>
      </div>
    </div>
  );
}

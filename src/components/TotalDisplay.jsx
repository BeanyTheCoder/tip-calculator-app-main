import React from "react";

export default function TotalDisplay({
  state: { bill, numOfPeople, tipSelection },
}) {
  function computeTotalPayPerPerson(bill, numOfPeople, tipSelection) {
    if (!bill || !numOfPeople) {
      const totalPayPerPerson = 0;
      return totalPayPerPerson.toFixed(2);
    }

    let totalTip = bill * (tipSelection / 100);
    let totalPay = parseFloat(bill) + totalTip;
    let totalPayPerPerson = totalPay / numOfPeople;

    return totalPayPerPerson.toFixed(2);
  }

  return (
    <div className="card__display__container__item">
      <div className="card__display__container__item__text">
        <p>Total</p>
        <span>/ person</span>
      </div>
      <div className="card__display__container__item__number">
        <p>{"$" + computeTotalPayPerPerson(bill, numOfPeople, tipSelection)}</p>
      </div>
    </div>
  );
}

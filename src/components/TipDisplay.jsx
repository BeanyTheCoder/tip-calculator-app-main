import React from "react";

export default function TipDisplay({
  state: { bill, numOfPeople, tipSelection },
}) {
  function computeTipPerPerson(bill, numOfPeople, tipSelection) {
    if (!bill || !numOfPeople || !tipSelection) {
      const tipPerPerson = 0;
      return tipPerPerson.toFixed(2);
    }

    const totalTip = bill * (tipSelection / 100);
    const tipPerPerson = totalTip / numOfPeople;

    return tipPerPerson.toFixed(2);
  }

  return (
    <div className="card__display__container__item">
      <div className="card__display__container__item__text">
        <p>Tip Amount</p>
        <span>/ person</span>
      </div>
      <div className="card__display__container__item__number">
        <p>{"$" + computeTipPerPerson(bill, numOfPeople, tipSelection)}</p>
      </div>
    </div>
  );
}

import React from "react";
import roundValue from "../helper-functions/roundValue";

export default function TipDisplay({
  state: { bill, numOfPeople, tipSelection },
}) {
  function computeTipPerPerson(bill, numOfPeople, tipSelection) {
    if (!bill || !numOfPeople || !tipSelection) {
      return 0;
    }

    let totalTip = bill * (tipSelection / 100);
    let tipPerPerson = totalTip / numOfPeople;
    return roundValue(tipPerPerson);
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

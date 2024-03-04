import React from "react";
import TipSelectionButton from "./TipSelectionButton";

export default function TipSelection({ state: tipSelection, setState:  setTipSelection }) {
  return (
    <div className="card__calculator__select">
      <p>Select Tip %</p>
      <div className="card__calculator__select__container">
        <TipSelectionButton percentage={5} state={tipSelection} setState={setTipSelection} />
        <TipSelectionButton percentage={10} state={tipSelection} setState={setTipSelection} />
        <TipSelectionButton percentage={15} state={tipSelection} setState={setTipSelection} />
        <TipSelectionButton percentage={25} state={tipSelection} setState={setTipSelection} />
        <TipSelectionButton percentage={50} state={tipSelection} setState={setTipSelection} />
        <div className="card__calculator__select__container__item">
          {/* <input type="text" placeholder="Custom" /> */}
          <span>Custom</span>
        </div>
      </div>
      <p>{tipSelection}</p>
    </div>
  );
}

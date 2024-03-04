import React from "react";

export default function TipSelectionButton({
  percentage,
  state: tipSelection,
  setState: setTipSelection,
}) {
  let isActive = tipSelection === percentage;
  function handleTipChange() {
    setTipSelection(() => {
      return isActive ? 0 : percentage;
    });
  }

  return (
    <button
      className={
        isActive
          ? "card__calculator__select__container__item --active"
          : " card__calculator__select__container__item"
      }
      onClick={handleTipChange}
    >
      {percentage.toString() + "%"}
    </button>
  );
}

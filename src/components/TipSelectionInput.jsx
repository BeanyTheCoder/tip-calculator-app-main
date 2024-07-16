import React, { useState } from "react";

export default function TipSelectionInput({
  state: tipSelection,
  setState: setTipSelection,
}) {
  const [errorMessage, setErrorMessage] = useState("");

  function handleTipSelectionChange(event) {
    const tipSelectionValue = event.target.value;

    function validate(value) {
      const parsedValue = parseInt(value);

      // to prevent letters and other characters from being entered, including letters like e, and decimal points(eg: no values such as 4r93e people)
      if (!/^\d+(\.0+)?$/.test(value)) {
        setErrorMessage("Must be valid number");
        return false;
      }

      // to prevent zero from being entered
      if (parsedValue === 0) {
        setErrorMessage("placeholder");
        return false;
      }

      // to prevent more than 2 digits from being entered(eg: no values such as 294 people)
      if (parsedValue < 1 || parsedValue > 99) {
        setErrorMessage("Must be between 1-99");
        return false;
      }

      setErrorMessage("");
      return true;
    }

    validate(tipSelectionValue)
      ? setTipSelection(tipSelectionValue)
      : setTipSelection(null);
  }

  return (
    <div
      className={`card__calculator__select__container__item ${
        tipSelection ?? `--invalid`
      }`}
    >
      <input
        type="text"
        placeholder="Custom"
        value={tipSelection}
        onChange={handleTipSelectionChange}
      />
    </div>
  );
}

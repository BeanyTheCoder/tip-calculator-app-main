import React from "react";

export default function ResetButton({
  setState: { setBill, setNumOfPeople, setTipSelection },
  state: { bill, numOfPeople, tipSelection },
}) {
  let isAllEmpty = [bill, numOfPeople, tipSelection].includes("");

  function resetValues() {
    setBill("");
    setNumOfPeople("");
    setTipSelection(0);
  }

  return (
    <button
      className="card__display__reset"
      onClick={resetValues}
      disabled={isAllEmpty}
    >
      Reset
    </button>
  );
}

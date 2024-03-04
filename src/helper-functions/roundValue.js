export default function roundValue(value, dp = 2) {
  if (typeof value !== "number") {
    return;
  }

  if (dp < 0) {
    return;
  }

  let expandedValue = value * Math.pow(10, dp);
  let collapsedValue = Math.round(expandedValue);
  let roundedValue = collapsedValue / Math.pow(10, dp);
  return roundedValue;
}

function chooseTaxi(
  TF1: string,
  VQR1: string,
  TF2: string,
  VQR2: string
): string {
  // Convert all inputs from string to number
  const fixedFee1 = parseFloat(TF1);
  const variableRate1 = parseFloat(VQR1);
  const fixedFee2 = parseFloat(TF2);
  const variableRate2 = parseFloat(VQR2);

  // If both companies have the same pricing model
  if (fixedFee1 === fixedFee2 && variableRate1 === variableRate2) {
    return "Either";
  }

  // If the rates per kilometer are the same,
  // the cheapest company is the one with the lowest fixed fee
  if (variableRate1 === variableRate2) {
    if (fixedFee1 < fixedFee2) {
      return "Company 1";
    } else {
      return "Company 2";
    }
  }

  // Try to find the distance where both companies cost the same
  const breakEvenDistance =
    (fixedFee1 - fixedFee2) / (variableRate2 - variableRate1);

  // If the break-even point is negative, then one company is always cheaper
  if (breakEvenDistance < 0) {
    const costAtZero1 = fixedFee1;
    const costAtZero2 = fixedFee2;
    if (costAtZero1 < costAtZero2) {
      return "Company 1";
    } else {
      return "Company 2";
    }
  }

  // Round the break-even distance for cleaner output
  const d = parseFloat(breakEvenDistance.toFixed(1));

  // Figure out which company is cheaper before and after the break-even distance
  const testBefore = d - 0.1;
  const cost1Before = fixedFee1 + variableRate1 * testBefore;
  const cost2Before = fixedFee2 + variableRate2 * testBefore;

  let companyBefore: string;
  let companyAfter: string;

  if (cost1Before < cost2Before) {
    companyBefore = "Company 1";
    companyAfter = "Company 2";
  } else {
    companyBefore = "Company 2";
    companyAfter = "Company 1";
  }

  // Compose the final output string
  return `${companyBefore} when distance < ${d}. Either when distance = ${d}. ${companyAfter} when distance > ${d}`;
}

// Example
const resu = chooseTaxi("4.50", "2.00", "3.00", "1.75");
console.log(resu);

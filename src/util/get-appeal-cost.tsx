import Web3 from "web3";

export const getAppealCost = (appealCost: number, multiplier: number, multiplierDivisor: number) => {
  if (!appealCost || !multiplier || !multiplierDivisor) {
    return "0";
  }

  const toBN = Web3.utils.toBN;

  return toBN(appealCost)
    .add(toBN(appealCost).mul(toBN(multiplier).div(toBN(multiplierDivisor))))
    .toString();
};

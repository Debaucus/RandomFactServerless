import { FactArray } from "./factArray";

const FactGen = function generateFact() {
  let factNumber = Math.floor(Math.random() * FactArray.length);
  console.log(FactArray[factNumber]);
  return FactArray[factNumber];
};

export default FactGen;

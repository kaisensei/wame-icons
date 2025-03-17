import invariant from "tiny-invariant";
import { getSportsInterestByName, SportsSvg } from "./sports";

export function getInterestSvg(categoryID: number, interestName: string) {
  let getInterestByName = null;
  switch (categoryID) {
    case 2:
      getInterestByName = getSportsInterestByName;
      break;
    default:
      invariant(false, 'unknown categoryID');
  }
  return getInterestByName(interestName);
}

export function getCategorySvg(categoryID: number) {
  switch (categoryID) {
    case 2:
      return SportsSvg;
    default:
      invariant(false, 'unknown categoryID');
  }
}
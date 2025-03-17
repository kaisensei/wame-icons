import { SvgSize } from "../util";
import { getInterestSvg } from "./util";

interface InterestProps {
  categoryID: number;
  interestName: string;
  size?: SvgSize;
  className?: string;
}

function Interest({
  categoryID,
  interestName,
  size = SvgSize.md,
  className = ''
}: InterestProps) {
  const InterestSvg = getInterestSvg(categoryID, interestName);

  return (
    <InterestSvg
      size={size}
      className={className}
    />
  );
}

export default Interest;
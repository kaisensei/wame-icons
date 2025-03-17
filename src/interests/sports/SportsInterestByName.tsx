import { SvgSize } from "../../util";
import { getSportsInterestByName } from "./util";

interface SportsInterestByNameProps {
  name: string;
  className?: string;
  size?: SvgSize;
}

function SportsInterestByName({
  name,
  className,
  size
}: SportsInterestByNameProps) {
  const Sports = getSportsInterestByName(name);
  return (
    <Sports className={className} size={size} />
  );
}

export default SportsInterestByName;
import { SvgProps, SvgSize } from '../util';

function RightArrowSvg({
  className = '',
  size = SvgSize.sm,
}: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={size}
      width={size}
      viewBox="0 -960 960 960"
    >
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    </svg>
  );
}

export default RightArrowSvg;

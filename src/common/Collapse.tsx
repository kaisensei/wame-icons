import { SvgProps, SvgSize } from '../util';

function Collapse({
  className = '',
  size = SvgSize.md,
}: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={size}
      width={size}
      viewBox="0 -960 960 960"
    >
      <path d="M200-440v-80h560v80H200Z" />
    </svg>
  );
}

export default Collapse;

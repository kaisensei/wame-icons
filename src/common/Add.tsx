import { SvgProps, SvgSize } from '../util';

function Add({
  className = '',
  size = SvgSize.md,
}: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role='img'
      className={className}
      height={size}
      width={size}
      viewBox="0 -960 960 960"
    >
      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
    </svg>
  );
}

export default Add;

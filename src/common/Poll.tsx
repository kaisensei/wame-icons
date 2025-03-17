import { SvgProps, SvgSize } from '../util';

function PollSvg({
  className = '',
  size = SvgSize.xs,
}: SvgProps) {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="pollIconTitle"
      strokeWidth="1"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      {' '}
      <title id="pollIconTitle">Poll</title>
      {' '}
      <path d="M4 4V20" />
      {' '}
      <path d="M4 6H15V10H4" />
      {' '}
      <path d="M4 10H19V14H4" />
      {' '}
      <path d="M4 14H12V18H4" />
    </svg>
  );
}

export default PollSvg;

import { expect, describe } from 'vitest';
import { render } from '@testing-library/react';
import WorenaLogo from './WorenaLogo';
import { SvgSize } from '../util';

describe('WorenaLogo component', () => {
  test('renders with default props', () => {
    render(<WorenaLogo />);
    const svgElement = document.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('height', SvgSize.xl.toString());
    expect(svgElement).toHaveAttribute('width', SvgSize.xl.toString());
  });

  test('renders with specified size', () => {
    const customSize = SvgSize.lg;
    render(<WorenaLogo size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with positive decimal size', () => {
    const customSize = 1.5;
    render(<WorenaLogo size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with specified className', () => {
    const customClass = 'test-class';
    render(<WorenaLogo className={customClass} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveClass(customClass);
  });
});

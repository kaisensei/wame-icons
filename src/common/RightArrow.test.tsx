import { expect, describe } from 'vitest';
import { render } from '@testing-library/react';
import RightArrow from './RightArrow';
import { SvgSize } from '../util';

describe('RightArrow component', () => {
  test('renders with default props', () => {
    render(<RightArrow />);
    const svgElement = document.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('height', SvgSize.sm.toString());
    expect(svgElement).toHaveAttribute('width', SvgSize.sm.toString());
  });

  test('renders with specified size', () => {
    const customSize = SvgSize.lg;
    render(<RightArrow size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with positive decimal size', () => {
    const customSize = 1.5;
    render(<RightArrow size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with specified className', () => {
    const customClass = 'test-class';
    render(<RightArrow className={customClass} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveClass(customClass);
  });
});

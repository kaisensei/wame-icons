import { expect, describe } from 'vitest';
import { render } from '@testing-library/react';
import Poll from './Poll';
import { SvgSize } from '../util';

describe('Poll component', () => {
  test('renders with default props', () => {
    render(<Poll />);
    const svgElement = document.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('height', SvgSize.xs.toString());
    expect(svgElement).toHaveAttribute('width', SvgSize.xs.toString());
  });

  test('renders with specified size', () => {
    const customSize = SvgSize.lg;
    render(<Poll size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with positive decimal size', () => {
    const customSize = 1.5;
    render(<Poll size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with specified className', () => {
    const customClass = 'test-class';
    render(<Poll className={customClass} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveClass(customClass);
  });
});

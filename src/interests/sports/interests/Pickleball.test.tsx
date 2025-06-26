import { expect, describe } from 'vitest';
import { render } from '@testing-library/react';
import Pickleball from './Pickleball';
import { SvgSize } from '../../../util';

describe('Pickleball component', () => {
  test('renders with default props', () => {
    render(<Pickleball />);
    const svgElement = document.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('height', SvgSize.md.toString());
    expect(svgElement).toHaveAttribute('width', SvgSize.md.toString());
  });

  test('renders with specified size', () => {
    const customSize = SvgSize.lg;
    render(<Pickleball size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with positive decimal size', () => {
    const customSize = 1.5;
    render(<Pickleball size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with specified className', () => {
    const customClass = 'test-class';
    render(<Pickleball className={customClass} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveClass(customClass);
  });
});

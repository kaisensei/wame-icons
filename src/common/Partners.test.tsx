import { expect, describe } from 'vitest';
import { render } from '@testing-library/react';
import Partners from './Partners';
import { SvgSize } from '../util';

describe('Partners component', () => {
  test('renders with default props', () => {
    render(<Partners />);
    const svgElement = document.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('height', SvgSize.sm.toString());
    expect(svgElement).toHaveAttribute('width', SvgSize.sm.toString());
  });

  test('renders with specified size', () => {
    const customSize = SvgSize.lg;
    render(<Partners size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with positive decimal size', () => {
    const customSize = 1.5;
    render(<Partners size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with specified className', () => {
    const customClass = 'test-class';
    render(<Partners className={customClass} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveClass(customClass);
  });
});

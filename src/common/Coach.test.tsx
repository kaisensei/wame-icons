import {expect, describe } from 'vitest';
import { render } from '@testing-library/react';
import Coach from './Coach';
import { SvgSize } from '../util';

describe('Coach component', () => {
  test('renders with default props', () => {
    const { container } = render(<Coach />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('height', SvgSize.md.toString());
    expect(svgElement).toHaveAttribute('width', SvgSize.md.toString());
  });

  test('renders with specified size', () => {
    const customSize = SvgSize.lg;
    render(<Coach size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with positive decimal size', () => {
    const customSize = 1.5;
    render(<Coach size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with specified className', () => {
    const customClass = 'test-class';
    render(<Coach className={customClass} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveClass(customClass);
  });
});

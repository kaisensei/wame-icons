import { expect, describe } from 'vitest';
import { render } from '@testing-library/react';
import Create from './Create';
import { SvgSize } from '../util';

describe('Create component', () => {
  test('renders with default props', () => {
    const { container } = render(<Create />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('height', SvgSize.md.toString());
    expect(svgElement).toHaveAttribute('width', SvgSize.md.toString());
  });

  test('renders with specified size', () => {
    const customSize = SvgSize.lg;
    render(<Create size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with positive decimal size', () => {
    const customSize = 1.5;
    render(<Create size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with specified className', () => {
    const customClass = 'test-class';
    render(<Create className={customClass} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveClass(customClass);
  });
});

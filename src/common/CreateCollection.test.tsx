import { expect, describe } from 'vitest';
import { render } from '@testing-library/react';
import CreateCollection from './CreateCollection';
import { SvgSize } from '../util';

describe('CreateCollection component', () => {
  test('renders with default props', () => {
    const { container } = render(<CreateCollection />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('height', SvgSize.md.toString());
    expect(svgElement).toHaveAttribute('width', SvgSize.md.toString());
  });

  test('renders with specified size', () => {
    const customSize = SvgSize.lg;
    render(<CreateCollection size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with positive decimal size', () => {
    const customSize = 1.5;
    render(<CreateCollection size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with specified className', () => {
    const customClass = 'test-class';
    render(<CreateCollection className={customClass} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveClass(customClass);
  });
});

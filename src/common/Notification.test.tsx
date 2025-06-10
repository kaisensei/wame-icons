import { expect, describe } from 'vitest';
import { render } from '@testing-library/react';
import Notification from './Notification';
import { SvgSize } from '../util';

describe('Notification component', () => {
  test('renders with default props', () => {
    render(<Notification />);
    const svgElement = document.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('height', SvgSize.lg.toString());
    expect(svgElement).toHaveAttribute('width', SvgSize.lg.toString());
  });

  test('renders with specified size', () => {
    const customSize = SvgSize.lg;
    render(<Notification size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with positive decimal size', () => {
    const customSize = 1.5;
    render(<Notification size={customSize} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    expect(svgElement).toHaveAttribute('width', customSize.toString());
  });

  test('renders with specified className', () => {
    const customClass = 'test-class';
    render(<Notification className={customClass} />);
    
    const svgElement = document.querySelector('svg');
    expect(svgElement).toHaveClass(customClass);
  });
});

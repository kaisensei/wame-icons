import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Calendar from "/src/common/Calendar"; // Changed import
import { SvgSize } from '/src/util';

describe('Calendar Component', () => { // Changed describe block name
  it('renders correctly with default props', () => {
    render(<Calendar />); // Changed component
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('class', '');
    // Assuming Calendar uses SvgSize.md as default, like Add
    expect(svgElement).toHaveAttribute('width', String(SvgSize.md));
    expect(svgElement).toHaveAttribute('height', String(SvgSize.md));
  });

  it('renders with a custom class name and a custom size', () => {
    render(<Calendar className="custom-class" size={SvgSize.xl}/>); // Changed component
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveClass('custom-class');
    expect(svgElement).toHaveAttribute('width', String(SvgSize.xl));
    expect(svgElement).toHaveAttribute('height', String(SvgSize.xl));
  });

  it('renders correctly with size as 0', () => {
    render(<Calendar size={0} />); // Changed component
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '0');
    expect(svgElement).toHaveAttribute('height', '0');
  });

  it('renders correctly with negative size', () => {
    render(<Calendar size={-1} />); // Changed component
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '-1');
    expect(svgElement).toHaveAttribute('height', '-1');
  });

  it('renders correctly with negative decimal size', () => {
    render(<Calendar size={-1.5} />); // Changed component
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '-1.5');
    expect(svgElement).toHaveAttribute('height', '-1.5');
  });

  it('renders correctly with positive decimal size', () => {
    render(<Calendar size={1.5} />); // Changed component
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '1.5');
    expect(svgElement).toHaveAttribute('height', '1.5');
  });

});

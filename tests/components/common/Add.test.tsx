import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Add from "../../../src/common/Add";
import { SvgSize } from '/src/util';

describe('Add Component', () => {
  it('renders correctly with default props', () => {
    render(<Add></Add>);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('class', '');
    expect(svgElement).toHaveAttribute('width', String(SvgSize.md));
    expect(svgElement).toHaveAttribute('height', String(SvgSize.md));
  });

  it('renders with a custom class name and a custom size', () => {
    render(<Add className="custom-class" size={SvgSize.xl}/>);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveClass('custom-class');
    expect(svgElement).toHaveAttribute('width', String(SvgSize.xl));
    expect(svgElement).toHaveAttribute('height', String(SvgSize.xl));
  });

  it('renders correctly with size as 0', () => {
    render(<Add size={0} />);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '0');
    expect(svgElement).toHaveAttribute('height', '0');
  });

  it('renders correctly with nagative size', () => {
    render(<Add size={-1} />);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '-1');
    expect(svgElement).toHaveAttribute('height', '-1');
  });

  it('renders correctly with nagative decimal size', () => {
    render(<Add size={-1.5} />);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '-1.5');
    expect(svgElement).toHaveAttribute('height', '-1.5');
  });

  it('renders correctly with positive decimal size', () => {
    render(<Add size={1.5} />);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '1.5');
    expect(svgElement).toHaveAttribute('height', '1.5');
  });

});
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Chat from "/src/common/Chat";
import { SvgSize } from '/src/util';

describe('Chat Component', () => {
  it('renders correctly with default props', () => {
    render(<Chat />);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('class', '');
    expect(svgElement).toHaveAttribute('width', String(SvgSize.md));
    expect(svgElement).toHaveAttribute('height', String(SvgSize.md));
  });

  it('renders with a custom class name and a custom size', () => {
    render(<Chat className="custom-class" size={SvgSize.xl}/>);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveClass('custom-class');
    expect(svgElement).toHaveAttribute('width', String(SvgSize.xl));
    expect(svgElement).toHaveAttribute('height', String(SvgSize.xl));
  });

  it('renders correctly with size as 0', () => {
    render(<Chat size={0} />);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '0');
    expect(svgElement).toHaveAttribute('height', '0');
  });

  it('renders correctly with nagative size', () => {
    render(<Chat size={-1} />);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '-1');
    expect(svgElement).toHaveAttribute('height', '-1');
  });

  it('renders correctly with nagative decimal size', () => {
    render(<Chat size={-1.5} />);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '-1.5');
    expect(svgElement).toHaveAttribute('height', '-1.5');
  });

  it('renders correctly with positive decimal size', () => {
    render(<Chat size={1.5} />);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '1.5');
    expect(svgElement).toHaveAttribute('height', '1.5');
  });

});
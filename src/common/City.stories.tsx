import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import City from './City';
import { SvgSize } from '../util';

const meta: Meta<typeof City> = {
  title: "common/City",
  component: City,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    // Get the SVG path element directly from canvasElement
    const svgPath = canvasElement.querySelector('path');
    
    // Assert that the fill attribute is set to blue
    expect(svgPath).not.toBeNull();
    expect(svgPath).toHaveAttribute('fill', 'blue');
  } 
};

export const md: Story = {
  name: "md",
  args:{
    className: 'city',
    size: SvgSize.md,
    color: 'blue',
  },
};

export const lg: Story = {
  name: "lg",
  args:{
    className: 'city',
    size: SvgSize.lg,
    color: 'blue',
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within} from '@storybook/test';
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
    const canvas = within(canvasElement);
    
    // Get the SVG element
    const svg= canvasElement.querySelector('svg'); 

    if (!svg) {
      throw new Error('SVG element not found');
    }
    // Check if the SVG has the blue class
    expect(svg.classList.contains('fill-blue-500')).toBe(true);
  }
};

export const md: Story = {
  name: "md",
  args:{
    className: "fill-blue-500",
    size: SvgSize.md,
  },
};

export const lg: Story = {
  name: "lg",
  args:{
    className: "fill-blue-500",
    size: SvgSize.lg,
  },
};
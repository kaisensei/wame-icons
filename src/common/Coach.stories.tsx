import type { Meta, StoryObj } from '@storybook/react';
import { expect, within} from '@storybook/test';
import Coach from './Coach';
import { SvgSize } from '../util';

const meta: Meta<typeof Coach> = {
  title: "common/Coach",
  component: Coach,
}; 

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const blue: Story = {
  name:"blue",
  args:{
    className: "fill-blue-500",
  },
  play: async ({ canvasElement }) => {
    // Get the SVG element
    const svg= canvasElement.querySelector('svg'); 

    if (!svg) {
      throw new Error('SVG element not found');
    }
    // Check if the SVG has the blue class
    expect(svg.classList.contains('fill-blue-500')).toBe(true);
  }
}

export const md: Story = {
  name: "md",
  args:{
    className: '',
    size: SvgSize.md,
  },
};

export const lg: Story = {
  name: "lg",
  args:{
    className: '',
    size: SvgSize.lg,
  },
}